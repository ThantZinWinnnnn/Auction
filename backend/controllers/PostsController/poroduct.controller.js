const prisma = require("../../prisma/index");

exports.getAllPosts = async (req,res)=>{
  const allPosts = await prisma.product.findMany();

  res.status(200).json({
    allPosts
  })
}

exports.getProductBySubCategory = async(req,res)=>{
  try {
    const p = req.query.product;

    const products = await prisma.product.findMany({
      where:{
        subCategory:{
          path:'$.name',
          equals:p
        }
      }
    });

    res.status(200).json(products)
  } catch (error) {
    res.status(400).json(error.message)
  }
}


//temporary later i will drop this codes
exports.createPost = async (req, res) => {
  const { title, image, price, owner, proCat } = req.body;

  const post = await prisma.product.create({
    data: {
      title,
      image,
      price,
      owner,
      category: { name: proCat },
    },
  });

  res.status(201).json({
    success: true,
    post,
  });
};

exports.userCreateProduct = async(req,res)=>{
  try {
    const {id:userId,name} = req.user;

  const {title,image,price,proCat} = req.body;

  const sellProduct = await prisma.product.create({
    data:{
      title,
      image,
      price,
      owner:name,
      category:proCat,
      sellerId:userId
    }
  });

  res.status(201).json({success:true,sellProduct})
  } catch (er) {
    res.status(400).json({message:er.message})
  }
}

exports.deletePosts = async (req, res) => {
  const post = await prisma.product.deleteMany();
  res.status(200).json(post);
};

exports.deleteById = async (req, res) => {
  const { id } = req.params;

  const post = await prisma.product.delete({
    where: {
      id,
    },
  });

  res.status(200).json({
    success:true,
    post
  });
};

exports.postById = async (req, res) => {
  const { id } = req.params;

  const post = await prisma.product.findUnique({
    where: {
      id,
    },
  });

  res.status(200).json(post);
};

exports.postByCategory = async (req, res) => {
  const { name } = req.body;
  const posts = await prisma.product.findMany({
    where:{
        category:{
            path:'$.name',
            equals:name
        },
        
        
    },
    include:{
      comment:true,
      
    },

  });

  res.status(200).json(posts);
};

exports.queryProduct = async(req,res)=>{

  try {
      const product = req.query.product;
      console.log("q",product)

      const products = await prisma.product.findMany({
        where:{
          title:{
            contains:product
            
          }
        }
      })

      res.status(200).json(
        products
      )

  } catch (error) {
    res.status(404).json({message:"Not Found which you find"})
  }
}