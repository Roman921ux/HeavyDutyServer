import jwt from 'jsonwebtoken'

export default (req, res, next) => {
  const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');

  if (token) {
    try {
      // расшифровываем token // снизу пояснение
      const decoded = jwt.verify(token, 'secret')
      // вшиваем в req 
      req.userId = decoded._id
      next()
    } catch (error) {
      return res.status(403).json({
        message: 'Нет доступа'
      })
    }
  } else {
    return res.status(403).json({
      message: 'Нет доступа'
    })
  }

}

// изначально мы шифровали по id пользователя
// и если мы расшифруем token он будет представляеть {}
// с ключами {_id, ..., ...}