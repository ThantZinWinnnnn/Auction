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

    const hashPass = await bcrypt.hash(password, 10);
    console.log(hashPass);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashPass,
        role,
      },
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
      console.log(user);
      const validUser = await bcrypt.compare(password, user.password);
      if (validUser) {
        await getJwtToken(res, 200, user);
      } else {
        throw new Error("Invalid Password");
      }
    } else {
      throw new Error("Invalid email or password");
    }
  } catch (error) {
    res.status(400).json({ message: "Invalid User" });
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

exports.forgotPassword = async (req, res) => {
  try {
    const { email, newPass } = req.body;

    const hashPassword = await bcrypt.hash(newPass, 10);

    const updatedUser = await prisma.user.update({
      where: {
        email,
      },
      data: {
        password: hashPassword,
      },
    });

    if (!updatedUser) {
      throw new Error("User Not Found.Please Singup.");
    }

    //to omit password later
    res.status(200).json({
      success: true,
      message: "Successfully changed the password",
      updatedUser,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updatePassword = async (req, res) => {
  try {
    const { email, oldPass, newPass } = req.body;

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new Error("Email NOt Found.Please enter valid email");
    }

    const comparePassword = await bcrypt.compare(oldPass, user.password);

    if (!comparePassword) {
      throw new Error(
        "OOPS! Password does not match.Please enter valid Password"
      );
    }

    const updatePassHash = await bcrypt.hash(newPass, 10);

    const updatedUserPass = await prisma.user.update({
      where: {
        email: user.email,
      },
      data: {
        password: updatePassHash,
      },
    });

    res.status(200).json({
      success: true,
      message: "Great! Successfully Update Password",
      updatedUserPass,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllUser = async (req, res, next) => {
  const users = await prisma.user.findMany();
  console.log(users);
  res.status(200).json({ users });
};


exports.updateProfile = async(req,res)=>{
  const userId = req.user.id;

  const{name,email,profileUrl,street,town,region,country} = req.body;

  const updatedUser = await prisma.user.update({
    where:{
      id:userId
    },
    data:{
      email,
      name,
      profileUrl,
      location:{
        create:{
          street,
          town,
          region,
          country
        }
      }
    },
    include:{location:true}
  });

  res.status(200).json({
    success:true,
    updatedUser
  })
}