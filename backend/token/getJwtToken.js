const jwt = require("jsonwebtoken");

const getJwtToken = async (res, statusCode, user) => {
  const payload = { id: user.id };
  const token = await jwt.sign(payload, process.env.SECRECT_TOKEN, {
    expiresIn: "1 day",
  });

  res.status(statusCode).json({
    success: true,
    token,
  });
};

module.exports = getJwtToken;
