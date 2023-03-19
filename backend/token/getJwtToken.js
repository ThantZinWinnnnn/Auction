const jwt = require("jsonwebtoken");

const getJwtToken = async(res,statusCode,user) => {
    const payload = {id:user.id}
  const token = await jwt.sign(payload , process.env.SECRECT_TOKEN, {
    expiresIn: "1 day",
  });
  const options = {
    expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    token,
  });
};

module.exports = getJwtToken;
