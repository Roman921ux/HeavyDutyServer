import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  // required - обязательное 
  email: { type: String, required: true, unique: true },
  // unique - уникальное
  passwordHash: { type: String, required: true },
  avatarUrl: String,
}, {
  timestamps: true,
  // добавляет дату создания&обновления сущности
});

export default mongoose.model('User', UserSchema);