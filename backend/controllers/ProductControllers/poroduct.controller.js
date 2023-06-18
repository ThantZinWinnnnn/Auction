const prisma = require("../../prisma/index");

exports.getAllPosts = async (req, res) => {
  const allPosts = await prisma.product.findMany();

  res.status(200).json(allPosts);
};

//to combine two api to one api
exports.getProductBySubCategory = async (req, res) => {
  try {
    const { subCategory } = req.body;

    const products = await prisma.product.findMany({
      where: {
        subCategory: {
          path: "$.name",
          equals: subCategory,
        },
      },
    });

    res.status(200).json(products);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

//temporary later i will drop this codes
exports.createPost = async (req, res) => {
  const username = req.user.name;
  const userId = req.user.id;
  const { title, image, price, category, subCategory, createdAt, updatedAt } =
    req.body;

  const post = await prisma.product.create({
    data: {
      title,
      image,
      price,
      owner: username,
      sellerId: userId,
      category: { name: category },
      subCategory: { name: subCategory },
      createdAt,
      updatedAt,
    },
  });

  res.status(201).json(post);
};

exports.updateProduct = async (req, res) => {
  try {
    const userId = req.user.id;
    const {
      price,
      currentBidPrice,
      category,
      subCategory,
      startDate,
      date,
      productId,
    } = req.body;

    console.log("endDate", date, "start", startDate);

    const updateProduct = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        sellerProducts: {
          update: {
            where: {
              id: productId,
            },
            data: {
              price,
              currentBidPrice,
              category: { name: category },
              subCategory: { name: subCategory },
              createdAt: startDate,
              updatedAt: date,
            },
          },
        },
      },
      include: {
        sellerProducts: {
          where: {
            id: productId,
          },
        },
      },
    });

    console.log("updated", updateProduct);

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deletePosts = async (req, res) => {
  const post = await prisma.product.deleteMany();
  res.status(200).json(post);
};

exports.deleteById = async (req, res) => {
  try {
    const { productId } = req.params;

    const post = await prisma.product.delete({
      where: {
        id: productId,
      },
    });

    res.status(200).json({
      success: true,
      post,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.postById = async (req, res) => {
  const { productId } = req.params;

  const product = await prisma.product.findUnique({
    where: {
      id: productId,
    },
    include: {
      watchListProducts: true,
    },
  });
  res.status(200).json(product);
};

// exports.postByCategory = async (req, res) => {
//   const name = req.query.cat;
//   console.log("name ",name)
//   const posts = await prisma.product.findMany({
//     where: {
//       category: {
//         path: "$.name",
//         equals: name,
//       },
//     },
//     include: {
//       comment: true,
//     },
//   });

//   res.status(200).json(posts);
// };

exports.productByCategory = async (req, res) => {
  const { category } = req.body;
  console.log("cat", category);

  const products = await prisma.product.findMany({
    where: {
      category: {
        path: "$.name",
        equals: category,
      },
    },
  });
  res.status(200).json(products);
};

exports.queryProduct = async (req, res) => {
  try {
    const product = req.query.product;
    console.log("q", product);

    const products = await prisma.product.findMany({
      where: {
        title: {
          contains: product,
        },
      },
    });

    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: "Not Found which you find" });
  }
};

exports.bidProductByUser = async (req, res) => {
  try {
    const { id, name } = req.user;
    const { price, productId } = req.body;

    console.log("product444", productId);
    console.log("price", price);

    const product = await prisma.product.update({
      where: {
        id: productId,
      },
      data: {
        currentOwner: { connect: { id } },
        currentBidPrice: price,
        currentOwnerName: name,
      },
    });
    console.log("product", product);

    const winProduct = await prisma.winLotProduct.create({
      data: {
        bidPrice: price,
        productId,
        userId: id,
      },
    });

    console.log("win", winProduct);

    res.status(200).json({ product, winProduct });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.addWatchListProduct = async (req, res) => {
  try {
    const { id } = req.user;
    const { productId } = req.body;

    const product = await prisma.watchListProduct.create({
      data: {
        userId: id,
        productId,
      },
    });

    console.log("addP", product);

    res.status(200).json({ success: true, product });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.removeWatchListProduct = async (req, res) => {
  try {
    const { id } = req.user;
    const { productId } = req.body;
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
      include: {
        WatchListProduct: true,
      },
    });
    const removeWatchListProduct = user?.WatchListProduct?.find(
      (p) => p?.productId === productId
    );

    const removedProduct = await prisma.watchListProduct.delete({
      where: {
        id: removeWatchListProduct?.id,
      },
    });

    res.status(200).json({ success: false, removedProduct });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllWatchListProducts = async (req, res) => {
  try {
    const { id } = req.user;

    const products = await prisma.watchListProduct.findMany({
      where: {
        userId: id,
      },
      select: {
        product: true,
      },
    });

    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }

  exports.getAllProductsByUserId = async (req, res) => {
    try {
      const userId = req.user.id;
      console.log("id", userId);

      const products = await prisma.user.findUnique({
        where: {
          id: userId,
        },
        select: {
          sellerProducts: true,
        },
      });

      res.status(200).json(products);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
};
