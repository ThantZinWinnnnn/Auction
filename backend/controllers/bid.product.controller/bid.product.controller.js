const prisma = require("../../prisma/index");

exports.bidProduct = async (req, res) => {
  const userId = req.user.id;
  const userName = req.user.name;
  const { price, productId } = req.body;

  const product = await prisma.product.findUnique({
    where: {
      id: productId,
    },
  });

  console.log("product", product);

  const currentOwnerId = product?.currentOwnerId;
  const currentBidPrice = product?.currentBidPrice;
  console.log("id", currentOwnerId, "price", currentBidPrice);

  //check if the bid is higher thant the current price
  if (price <= product.currentBidPrice) {
    res
      .status(400)
      .json({ message: "Bid Price should be higher than the current price" });
  }

  //Update the proudct's current owner and price
  const updatedProduct = await prisma.product.update({
    where: {
      id: productId,
    },
    data: {
      currentOwner: { connect: { id: userId } },
      currentBidPrice: price,
      currentOwnerName: userName,
    },
  });
  console.log("updatePro", updatedProduct);

  //create a new WinLOtProduct entry with the new owner and bid price
  const winProduct = await prisma.winLotProduct.create({
    data: {
      bidPrice: price,
      product: { connect: { id: productId } },
      owner: { connect: { id: userId } },
    },
  });
  console.log("winPro", winProduct);

  //get the previous owner's id and all of winLotProducts

  //create a new LostLotProduct with the previous owner and bid price

  const lostProduct = await prisma.LostLotProduct.create({
    data: {
      bidPrice: currentBidPrice,
      product: { connect: { id: productId } },
      owner: { connect: { id: currentOwnerId } },
    },
  });
  console.log("lostPro", lostProduct);

  const currentuser = await prisma.user.findUnique({
    where: {
      id: currentOwnerId,
    },
    include: {
      winLotProducts: true,
      lostLotProducts: true,
    },
  });

  console.log("array", currentuser);

  //find the winlotproduct to disconnect find((wp) => wp.productId === product.id)
  const winLotProductToDisconnect = currentuser?.winLotProducts?.find(
    (wp) => wp.productId === productId
  );

  if (!winLotProductToDisconnect)
    res.status(400).json({ message: "No product to disconnect" });
  console.log("disconnect", winLotProductToDisconnect);
  const disconnectId = winLotProductToDisconnect?.id;

  const currentWinner = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      lostLotProducts: true,
    },
  });

  const lostLotProductToDisconnect = currentWinner?.lostLotProducts?.find(
    (lp) => lp?.productId === productId
  );

  if (lostLotProductToDisconnect) {
    const lostLotProductToDisconnectWinner = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        lostLotProducts: {
          disconnect: { id: lostLotProductToDisconnect?.id },
        },
      },
    });

    console.log("movePro", lostLotProductToDisconnectWinner);
  }

  const updateWinLotProduct = await prisma.user.update({
    where: {
      id: currentOwnerId,
    },
    data: {
      winLotProducts: {
        disconnect: { id: disconnectId },
      },
    },
  });

  console.log("updatewinLotloser", updateWinLotProduct);

  res.status(200).json({ success: true, updateWinLotProduct });
};

exports.deleteMany = async (req, res) => {
  const products = await prisma.winLotProduct.deleteMany();
  res.status(200).json({ message: "success" });
};

exports.deleteManyLost = async (req, res) => {
  const products = await prisma.LostLotProduct.deleteMany();
  res.status(200).json({ message: "success" });
};

exports.bidCurrentUser = async (req, res) => {
  const userId = req.user.id;
  const userName = req.user.name;
  const productId = req.params.productId;
  const { bidPrice } = req.body;
  console.log("bod", req.body);
  console.log("id", productId);
  console.log(bidPrice);

  const product = await prisma.product.update({
    where: {
      id: productId,
    },
    data: {
      currentOwner: { connect: { id: userId } },
      currentBidPrice: bidPrice,
      currentOwnerName: userName,
    },
  });

  console.log("product", product);

  const winProduct = await prisma.winLotProduct.create({
    data: {
      bidPrice,
      productId,
      userId,
    },
  });

  res.status(201).json({ winProduct });
};

exports.userWinProducts = async (req, res) => {
  const userId = req.user.id;

  const prdoucts = await prisma.winLotProduct.findMany({
    where: {
      userId,
    },
    select: {
      product: true,
    },
  });

  res.status(200).json(prdoucts);
};

exports.userLostProducts = async (req, res) => {
  const userId = req.user.id;

  const products = await prisma.lostLotProduct.findMany({
    where: {
      ownerId: userId,
    },
    select: {
      product: true,
    },
  });

  res.status(200).json(products);
};
