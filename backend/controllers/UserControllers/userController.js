const prisma = require("../../prisma/index");
const bcrypt = require("bcrypt");
const getJwtToken = require("../../token/getJwtToken");

//user signup

exports.singUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      res.status(400).send({ message: "please provide all fields" });
    }

    const hashPass = await bcrypt.hash(password, 10);
    console.log(hashPass);

    const user = await prisma.user.create({
      data: {
        name: username,
        email,
        password: hashPass,
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
    res.status(400).json({ message: error.message });
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
    res.status(200).json(updatedUser);
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

    res.status(200).json(updatedUserPass);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllUser = async (req, res, next) => {
  const users = await prisma.user.findMany();
  console.log(users);
  res.status(200).json({ users });
};

exports.updateProfile = async (req, res) => {
  try {
    const userId = req.user.id;

    const {
      name,
      email,
      profileUrl,
      backgroundUrl,
      street,
      town,
      region,
      country,
    } = req.body;

    const updatedUser = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        email,
        name,
        profileUrl,
        backgroundUrl,
        location: {
          create: {
            street,
            town,
            region,
            country,
          },
        },
      },
      include: { location: true },
    });

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getLoggedInUser = async (req, res) => {
  try {
    const userId = req.user.id;

    const loggedInUser = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      include: { location: true },
    });

    res.status(200).json(loggedInUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getUserProducts = async (req, res) => {
  try {
    const { id } = req.user;

    const products = await prisma.user.findUnique({
      where: {
        id,
      },
      select: {
        sellerProducts: true,
        winLotProducts: true,
        lostLotProducts: true,
      },
    });

    res.status(200).json({ products });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
