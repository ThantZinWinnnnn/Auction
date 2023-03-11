const prisma = require("../../prisma/index");

const getJwtToken = require("../../token/getJwtToken");

//user signup

exports.singUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(name, email, password);

    if (!name || !email || !password) {
      res.status(400).send({ message: "please provide all fields" });
    }

    const user = await prisma.user.create({
      data: {
        email,
        name,
        password,
      },
    });
    const token = await getJwtToken(user.id);
    const options = {
      expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };

    res.status(201).cookie("token", token, options).json({
      success: true,
      token,
    });
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: "Please provide valid fields" });
  }
};

exports.logout=async(req,res)=>{
    res.clearCookie('token',{
        expires:new Date(Date.now()),
        httpOnly:true
    }).json({
        success:true,
        message:"Logged Out Successfully"
    })
}

exports.getAllUser = async (req, res, next) => {
  const users = await prisma.user.findMany();
  console.log(users);
  res.status(200).json({ users });
};
