import mongoose from 'mongoose';

const approachSchema = new mongoose.Schema({
  kg: { type: Number, required: true },
  repeat: { type: Number, required: true }
});

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true, minlength: 3 },
  description: { type: String },
  start: { type: Date, required: true },
  approaches: { type: [approachSchema], required: true, default: [] },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});


export default mongoose.model('Event', eventSchema);

// const userId = '603e84b0935c8500157ddc47'; // Пример идентификатора пользователя

// const newEvent = new Event({
//   title: 'Встреча',
//   description: 'Важная встреча на следующей неделе',
//   start: new Date('2024-04-30T09:00:00'),
//   approaches: [{ kg: 10, repeat: 5 }],
//   user: userId, // Указываем идентификатор пользователя
// });

// newEvent.save()
//   .then(event => {
//     console.log('Событие успешно создано:', event);
//   })
//   .catch(error => {
//     console.error('Ошибка при создании события:', error);
//   });

