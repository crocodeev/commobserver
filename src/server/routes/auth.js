const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('../config/cfr.js');


router.post('/', async (req, res) => {

  try {

    const { username, password } = req.body;

    console.log(username);

    const isUser = username === config.user;

    if(!isUser){
      return res.status(400).json({message: "Пользователь не найден"});
    }

    console.log(password);
    //const isMatch = await bcrypt.compare(password, config.pswd);
    const isMatch = password === config.pswd;

    if(!isMatch){
      return res.status(400).json({ message: "Неверный пароль, попробуйте снова" });
    }

    const token = jwt.sign(
      { userId: config.userId },
      config.jwtSecret,
      { expiresIn: '1h'});


    res.json({ token, userId: config.userId });


  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова.'})
  }

});

module.exports = router;
