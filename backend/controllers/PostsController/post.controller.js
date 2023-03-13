const prisma  = require("../../prisma/index");


exports.createPost = async(req,res)=>{
    const {title,image,price,owner} = req.body;

    const post = await prisma.product.create({
        data:{
            title,
            image,
            price,
            owner
        },
    })

    res.status(201).json({
        success:true,
        post
    })
}