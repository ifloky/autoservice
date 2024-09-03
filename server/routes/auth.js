const express = require('express');
const router = express.Router();
const User = require('../models/User');
const controller = require("../controllers/authController");
const {check} = require("express-validator")
const authMiddleware = require("../middlewares/authMiddleware")
const roleMiddleware = require("../middlewares/roleMiddleware")

router.post('/registration', [
    check('name', 'Имя не должно быть пустым').notEmpty(),
    check('password', 'Пароль должен быть длинее 4 символов').isLength({min:4, max:10})
  ], controller.registration);

router.post('/login', controller.login);

router.get('/users', roleMiddleware(["Admin"]), controller.getUsers);

module.exports = router;
