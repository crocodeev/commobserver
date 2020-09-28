const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('../config/cfr.js');

function verifyToken(req, res, next){

  const token = req.body.token;

  if (!token) {
    return res.status(400).json({ message: "Токен не предоставлен" });
  }

  jwt.verify(token, config.jwtSecret, (err, decodedData) => {
    if (err){
      return res.status(400).json({ message: "Неверный токен" });
    }

    if(decodedData.userId === config.userId){
      next();
    }else{
      return res.status(400).json({ message: "Неверный токен" });
    };
  })
}

module.exports = verifyToken;
