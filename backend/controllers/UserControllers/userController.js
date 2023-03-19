const prisma = require("../../prisma/index");
const bcrypt = require("bcrypt");
const getJwtToken = require("../../token/getJwtToken");


//user signup

exports.singUp = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;


    if (!name || !email || !password) {
      res.status(400).send({ message: "please provide all fields" });
    }

    const hashPass = await bcrypt.hash(password,10);
    console.log(hashPass)

    const user = await prisma.user.create({
      data:{
        name,
        email,
        password:hashPass,
        role
      }
    });

    await getJwtToken(res, 201, user);
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: "Please provide valid fields" });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    
    if (user) {
      console.log(user)
      const validUser = await bcrypt.compare(password, user.password);
      if (validUser) {
        await getJwtToken(res,200,user)
      } else {
        throw new Error("Invalid Password");
      }
    } else {
      throw new Error("Invalid email or password");
    }
  } catch (error) {
    res.status(400).json({message:"Invalid User"})
  }
};

exports.logout = async (req, res) => {
  res
    .clearCookie("token", {
      expires: new Date(Date.now()),
      httpOnly: true,
    })
    .json({
      success: true,
      message: "Logged Out Successfully",
    });
};

exports.getAllUser = async (req, res, next) => {
  const users = await prisma.user.deleteMany();
  console.log(users);
  res.status(200).json({ users });
};
