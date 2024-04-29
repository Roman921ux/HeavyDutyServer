import { body } from 'express-validator'

export const registerValidation = [
  body('email', 'Неккоректный пароль').isEmail(),
  body('password').isLength({ min: 5 }),
  body('fullName').isLength({ min: 3 }),
  body('avatarUrl').optional().isURL(),
]

export const loginValidation = [
  body('email', 'Неккоректный пароль').isEmail(),
  body('password').isLength({ min: 5 })
]