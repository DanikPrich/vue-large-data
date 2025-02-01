import mongoose from 'mongoose'

const wordSchema = new mongoose.Schema({
  id: Number,
  title: String,
  order: Number,
})

export default mongoose.model('Word', wordSchema)
