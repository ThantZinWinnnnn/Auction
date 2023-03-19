const prisma = require("../../prisma/index");

exports.createComment = async (req, res) => {
  try {
    // const { id } = req.params.user;
    const { postId } = req.params;
    const { comment, rating } = req.body;
    console.log("posid",postId)

    const newComment = await prisma.comment.create({
      data: {
        comment,
        rating,
        userId:"4f6a52cd-8eb1-4cc1-a0fc-7fbf3fb2b603",
        productId: `${postId}`,
      },
      
    });
    res.status(201).json(newComment).end();
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
