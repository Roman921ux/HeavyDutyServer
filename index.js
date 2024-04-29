import express from 'express'
import mongoose from 'mongoose'
import { loginValidation, registerValidation } from './validation/auth.js'
//
import CheckAuth from './utils/checkAuth.js'
import { getMe, login, register } from './controllrs/UserControllers.js'
import { eventCreateValidation } from './validation/event.js'
import { createEvent, createEventApproach, getAll, removeOne, updateEvent } from './controllrs/EventController.js'



mongoose.connect('mongodb+srv://skorohodroman921:A2RGYiv5qkCrHNfl@cluster0.awglyfa.mongodb.net/heavyDuty')
  .then(() => { console.log('DB OK!') })
  .catch((err) => console.log('Error DB', err))

const app = express()
app.use(express.json())


app.get('/', (req, res) => {
  res.send('Hello from Srver! ;)')
})
app.post('/auth/login', loginValidation, login)
app.post('/auth/register', registerValidation, register)
app.get('/auth/me', CheckAuth, getMe)

app.post('/event', CheckAuth, eventCreateValidation, createEvent)
app.post('/event/approach', CheckAuth, createEventApproach)
app.get('/event', CheckAuth, getAll)
app.delete('/event/:id', CheckAuth, removeOne)
app.patch('/event/:id', CheckAuth, updateEvent)

app.listen(4444, (err) => {
  if (err) {
    return console.log(err)
  }

  console.log('Server Ok!')
})