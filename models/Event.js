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

