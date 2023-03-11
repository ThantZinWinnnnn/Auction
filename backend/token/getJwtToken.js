const jwt = require("jsonwebtoken");

const getJwtToken = (userId) => {
  return jwt.sign({ userId }, process.env.SECRECT_TOKEN, {
    expiresIn: "1 day",
  });
};

module.exports = getJwtToken;
