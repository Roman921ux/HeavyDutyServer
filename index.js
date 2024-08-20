import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import { loginValidation, registerValidation } from './validation/auth.js'
//
import CheckAuth from './utils/checkAuth.js'
import { getMe, login, register } from './controllrs/UserControllers.js'
import { eventCreateValidation } from './validation/event.js'
import { createEvent, createEventApproach, getAll, removeEventSet, removeOne, updateEvent } from './controllrs/EventController.js'
import { createExerciseForAll, getAllExercise } from './controllrs/ExercisesController.js'
//
import ExerciseModel from './models/Exercise.js'

// mongodb+srv://skorohodroman921:A2RGYiv5qkCrHNfl@cluster0.awglyfa.mongodb.net/heavyDuty

// mongodb+srv://skorohodroman921:<password>@cluster1.mpr23.mongodb.net/
// mongodb+srv://skorohodroman921:A2RGYiv5qkCrHNfl@cluster1.mpr23.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1
mongoose.connect('mongodb+srv://skorohodroman921:A2RGYiv5qkCrHNfl@cluster1.mpr23.mongodb.net/heavyDuty')
  .then(() => { console.log('DB OK!') })
  .catch((err) => console.log('Error DB', err))

const app = express()
app.use(cors());
app.use(express.json())


app.get('/', (req, res) => {
  res.send('Hello from Srver! ;)')
})
app.post('/auth/login', loginValidation, login)
app.post('/auth/register', registerValidation, register)
app.get('/auth/me', CheckAuth, getMe)

app.post('/event', CheckAuth, eventCreateValidation, createEvent) // создать event
app.patch('/event/:id', CheckAuth, updateEvent) // изменить set
app.delete('/event/set/:id', CheckAuth, removeEventSet) // удалит set
app.post('/event/approach', CheckAuth, createEventApproach) // создать set
app.get('/event', CheckAuth, getAll) // получить все events
app.delete('/event/:id', CheckAuth, removeOne) // удалить event

app.get('/exercise', CheckAuth, getAllExercise)
app.post('/exercise', CheckAuth, createExerciseForAll)

const PORT = 4444;
const HOST = '0.0.0.0';

app.listen(PORT, HOST, (err) => {
  if (err) {
    return console.log(err)
  }

  console.log(`Сервер запущен по адресу http://${HOST}:${PORT}/`)
})