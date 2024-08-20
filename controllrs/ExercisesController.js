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

export const createExerciseForAll = async (req, res) => {
  try {
    const doc = new ExerciseModel({
      title: req.body.title,
      description: req.body.description,
      category: req.body.category
    });
    const exercise = await doc.save();
    res.json(exercise);
  } catch (error) {
    res.status(400).json({
      message: 'Exercise не создан'
    })
  }
}


