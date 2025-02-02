import mongoose from 'mongoose'

const wordSchema = new mongoose.Schema({
  id: String,
  title: String,
})

export default mongoose.model('Word', wordSchema)
