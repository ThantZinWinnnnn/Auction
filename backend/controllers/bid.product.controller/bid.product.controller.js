const prisma = require("../../prisma/index");

exports.bidProduct = async (req, res) => {
  const userId = req.user.id;
  const userName = req.user.name;
  const { productId, bidPrice } = req.body;

  const product = await prisma.product.findUnique({
    where: {
      id: productId,
    },
  });

  //check if the bid is higher thant the current price
  if (bidPrice <= product.price) {
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
      currentBidPrice: bidPrice,
      currentOwnerName:userName
    },
  });
  //console.log("updatePro", updatedProduct);

  //create a new WinLOtProduct entry with the new owner and bid price
  const winProduct = await prisma.winLotProduct.create({
    data: {
      bidPrice,
      productId,
      userId,
    },
  });
  //console.log("winPro", winProduct);

  //get the previous owner's id and all of winLotProducts
  const { currentOwnerId} = product;

  //create a new LostLotProduct with the previous owner and bid price

  const lostProduct = await prisma.LostLotProduct.create({
    data: {
      bidPrice: product.currentBidPrice,
      productId,
      ownerId: currentOwnerId,
    },
  });
  //console.log("lostPro", lostProduct);

  const currentuser = await prisma.user.findUnique({
    where:{
      id:currentOwnerId
    },
    include:{
      winLotProducts:true
    }
  });

  //console.log("array",currentuser)

  //find the winlotproduct to disconnect find((wp) => wp.productId === product.id)
   const winLotProductToDisconnect = currentuser.winLotProducts.find((wp)=> wp.productId === product.id)
   console.log("disconnect",winLotProductToDisconnect)

   //update the winlotProduct to removw the reference to the user
   const updateWinLotProduct = await prisma.winLotProduct.update({
    where:{id:winLotProductToDisconnect.id},
    data:{
      owner:{
        disconnect:true
      }
    }
   })

   

  //Update the previous owner's winLOtProduct and  lostLOtProduct lists

  const deleteLostProductFromLoser = await prisma.user.update({
    where:{id:currentuser.id},
    data:{
      winLotProducts:{
        disconnect:{
          id:winLotProductToDisconnect? winLotProductToDisconnect.id:undefined
        }
      },
      lostLotProducts:{
        connect:{
          id:lostProduct.id
        }
      }
    },
    include:{
      winLotProducts:true,
      lostLotProducts:true
    }
  });

  // const updatedLists = await prisma.user.update({
  //   where:{id:currentuser.id},
  //   data:{
  //       winLotProducts:[
  //           {
  //               disconnect:winLotProductToDisconnect ? {id:winLotProductToDisconnect.id} : undefined
  //           }
  //       ],
  //       lostLotProducts:[
  //           {
  //               connect:{id:lostProduct.id}
  //           }
  //       ]
  //   }
  // });
  //console.log(deleteLostProductFromLoser);

  res.status(200).json({success:true,
    deleteLostProductFromLoser})
};


exports.deleteMany = async(req,res)=>{
    const products = await prisma.winLotProduct.deleteMany();
    res.status(200).json({message:"success"})
}

exports.deleteManyLost = async(req,res)=>{
    const products = await prisma.LostLotProduct.deleteMany()
    res.status(200).json({message:"success"})
}


exports.bidCurrentUser = async(req,res)=>{

  const userId = req.user.id;
  const userName = req.user.name;
  const {productId,bidPrice} = req.body;

  const product = await prisma.product.update({
    where:{
      id:productId
    },
    data:{
      currentOwner:{connect:{id:userId}},
      currentBidPrice:bidPrice,
      currentOwnerName:userName
    }
  });

  console.log("product",product)

  const winProduct = await prisma.winLotProduct.create({
    data:{
      bidPrice,
      productId,
      userId
    }
  });

  res.status(201).json({winProduct})

}

exports.userWinProduct = async(req,res)=>{

  const userId = req.user.id;
  const user = await prisma.user.findUnique({
    where:{
      id:userId
    },
    include:{
      winLotProducts:true,
      lostLotProducts:true,
      sellerProducts:true
    }
  });

  res.status(200).json({user})
}