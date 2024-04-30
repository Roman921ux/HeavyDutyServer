import mongoose from "mongoose";

// {
//   title: 'Жим лежа', 
//   description: 'Info from Жим лежа', 
//   urlVideo: 'https://www.youtube.com/embed/uioH7LSL7Js?si=8VoBAWq8xAxUGN3q',
//   category: ['breast', 'triceps', 'shoulders']
// },

const exerciseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  category: [{ type: String }]
})

export default mongoose.model('Exercise', exerciseSchema)