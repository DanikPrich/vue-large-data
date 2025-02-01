import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

dotenv.config({ path: '../.env' })

const app = express()
const port = process.env.PORT || 3000
const mongoUri = process.env.MONGODB_URI

mongoose.connect(mongoUri)

app.use(cors())
app.use(express.json())

const data = Array.from({ length: 10000 }, (_, i) => ({
  id: i,
  text: `Word ${i + 1}`,
}))

app.get('/api/test-data', (req, res) => {
  res.json(data)
})

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`)
})
