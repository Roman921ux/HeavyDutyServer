import { body } from 'express-validator'

export const eventCreateValidation = [
  body('title').isString().withMessage('Заголовок должен быть строкой'),
  body('description').isString().withMessage('Описание должно быть строкой'),
  body('start').isISO8601().withMessage('Некорректный формат даты и времени начала'),
  body('approaches').isArray().withMessage('Подходы должны быть представлены в виде массива'),
  body('approaches.*.kg').isNumeric().withMessage('Вес должен быть числом'),
  body('approaches.*.repeat').isNumeric().withMessage('Количество повторений должно быть числом'),
];

// id(pin):"774d032a-a0a2-400c-97dd-375f51c1ce72"
// title(pin):"Приседание со штангой"
// description(pin):"Info from Приседание со штангой"
// start(pin):"2024-04-28T12:51:42"
// approaches [{
//   kg(pin):"11"
// repeat(pin):"11"
// id(pin):"e56acdc5-c122-4218-8ac4-047c9401ea65"
// }]
