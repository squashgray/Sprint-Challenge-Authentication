const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../auth/auth-secret");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (authorization) {
    jwt.verify(authorization, jwtSecret, function(err, decodedToken) {
      console.log(authorization);
      if (err) {
        res.status(401).json({ message: "Token is Invalid" });
      } else {
        req.user = decodedToken;

        next();
      }
    });
  } else {
    res.status(400).json({ message: "Login and try again" });
  }
};
