require('dotenv').config({ path: '../.env' })
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3000
const mongoUri = process.env.MONGODB_URI

mongoose.connect(mongoUri)

app.use(cors())
app.use(express.json())

const testData = [
  { id: 1, text: 'Word 1' },
  { id: 2, text: 'Word 2' },
  { id: 3, text: 'Word 3' },
]

app.get('/api/test-data', (req, res) => {
  res.json(testData)
})

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`)
})
