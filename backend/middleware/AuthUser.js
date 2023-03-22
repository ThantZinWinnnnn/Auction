const jwt = require("jsonwebtoken");
const prisma = require("../prisma/index");

exports.isAuthenticatedUser = async (req, res, next) => {
  const { token } = req.cookies;
  console.log(token);
  if (!token) {
    return res.status(401).json({ message: "Please Login to view the Page" });
  }

  try {
    const verifyUser = jwt.verify(token, process.env.SECRECT_TOKEN);
    req.user = await prisma.user.findUnique({ where: { id: verifyUser.id } });
    console.log("user", req.user);
    next();
  } catch (err) {
    const message =
      err.name === "JsonWebTokenError" ? "Unauthorized" : err.message;
    res.status(401).json({ message: message });
  }
};
