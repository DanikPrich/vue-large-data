import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import wordRoutes from './routes/wordRoutes.js'

dotenv.config({ path: '../.env' })

const app = express()
const port = process.env.PORT || 3000
const mongoUri = process.env.MONGODB_URI

// Connecting to MongoDB
mongoose.connect(mongoUri)

// Middleware
app.use(cors())
app.use(express.json())

// routes
app.use('/api', wordRoutes)

// Server starting
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})
