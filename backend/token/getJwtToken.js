const jwt = require("jsonwebtoken");

const getJwtToken = async(userId) => {
    const payload = {id:userId}
  const token = await jwt.sign(payload , process.env.SECRECT_TOKEN, {
    expiresIn: "1 day",
  });
  return token
};

module.exports = getJwtToken;
