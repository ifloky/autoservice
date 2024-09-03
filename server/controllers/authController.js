const Role = require('../models/Role')
const User = require('../models/User')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator')
const { secret } = require('../config')

const generateAccessToken = (id, roles) => {
  const payload = {
    id,
    roles
  }
  return jwt.sign(payload, secret, {expiresIn: "24h"})
}

class authController {
  async registration(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: "Ошибка регистрации", errors});
      }
      const {name, password} = req.body;
      const candidate = await User.findOne({name})
      if (candidate) {
        return res.status(400).json({message: "Пользователь с таким именем существует"});
      }
      const hashPassword = bcrypt.hashSync(password, 7);
      const userRole = await Role.findOne({value: 'User'})
      const user = new User({ name, password: hashPassword, roles: [userRole.value]});
      await user.save();
      res.status(200).json({ message: 'Registration ok' })
    } catch (error) {
      console.log(error);
      res.status(400).json({message: 'Registration error'})}
  }

  async login(req, res) {
    try {
      const { name, password } = req.body;
      console.log(name, password)
      const user = await User.findOne({ name })
      if (!user) {
        return res.status(400).json({ message: "Пользователь с таким именем не найден" });
      }
      const validPassword = bcrypt.compareSync(password, user.password); 
      if (!validPassword) {
        return res.status(400).json({ message: "Некорректный пароль" });
      }
      const token = generateAccessToken(user._id, user.roles)
      return res.json({token})
    } catch (error) {
      console.log(error);
      res.status(400).json({message: 'login error'})}
  }

  async getUsers(req, res) {
    try {
      const user = await User.find()
      res.json(user)
    } catch (error) {
      
    }
  }
}

module.exports = new authController();