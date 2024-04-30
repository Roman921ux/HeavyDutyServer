import ExerciseModel from '../models/Exercise.js'

export const getAllExercise = async (req, res) => {
  try {
    const exercise = await ExerciseModel.find();
    // const events = await EventModel.find().populate('user').exec();
    // свяжет вторую модель User по id, здесь token не нужен

    res.json(exercise)
  } catch (error) {
    res.status(400).json({
      message: 'Не получилось вернуть exercise'
    })
  }
}
