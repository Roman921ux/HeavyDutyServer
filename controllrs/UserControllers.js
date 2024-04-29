import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { validationResult } from 'express-validator'
import UserModel from '../models/User.js'


export const register = async (req, res) => {
  try {
    const errors = validationResult(req);

    // если есть ошибка
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array())
    }

    // если все окей => шифруем пароль пользователя
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10) // алгоритм шифрования
    const hash = await bcrypt.hash(password, salt)

    const doc = new UserModel({
      email: req.body.email,
      fullName: req.body.fullName,
      avatarUrl: req.body.avatarUrl,
      passwordHash: hash,
    });

    // сохранение в базе данных
    const user = await doc.save();

    // создаем token
    const token = jwt.sign({
      _id: user._id,
    }, 'secret', { expiresIn: '30d' })

    // вытащим из user => passwordHash
    const { passwordHash, ...userData } = user._doc

    res.json({ ...userData, token })
  } catch (error) {
    res.status(500).json({
      message: 'Не удалось зарегистрироваться'
    })
  }
}

export const login = async (req, res) => {
  try {
    // ищем пользователя в базе данных
    const user = await UserModel.findOne({ email: req.body.email })

    if (!user) {
      return req.status(404).json({ message: 'Такого пользователя не существует' })
    }

    // проверка на одинаковость пароля
    const isValidPass = await bcrypt.compare(req.body.password, user._doc.passwordHash)
    if (!isValidPass) {
      return req.status(404).json({ message: 'Не верный логин или пароль' })
    }

    // создаем token
    const token = jwt.sign({
      _id: user._id,
    }, 'secret', { expiresIn: '30d' })

    // вытащим из user => passwordHash
    const { passwordHash, ...userData } = user._doc
    res.json({ ...userData, token })

  } catch (error) {
    res.status(500).json({
      message: 'Не удалось авторизоваться'
    })
  }
}

export const getMe = async (req, res) => {
  try {
    const user = await UserModel.findById(req.userId)
    // можно и так => findOne({ _id: req.userId })

    // если пользователь не найден
    if (!user) {
      return res.status(404).json({
        message: 'Пользователь не найден'
      });
    }

    // вытащим из user => passwordHash
    const { passwordHash, ...userData } = user._doc

    res.json(userData)
  } catch (error) {
    res.status(500).json({
      message: 'Не удалось найти пользователя'
    })
  }
}