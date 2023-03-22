const prisma = require("../../prisma/index");

exports.detailTitles = async (req, res) => {
  const { title,title2,title3,image,image2,image3,productId} = req.body;

  
  const detailSubCat = await prisma.product.update({
    where:{
        id:productId
    },
    data:{
        subCategory:[
            {
                subCatTitle:title,
                image,
            },{
                subCatTitle:title2,
                image2,
            },{
                subCatTitle:title3,
                image3,
            }
        ]
    }
  })

  res.status(200).json({ success: true, detailSubCat });
};
