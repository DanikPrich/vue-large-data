import express from 'express'
import { getWords, deleteWords } from '../controllers/wordController.js'

const router = express.Router()

router.get('/words', getWords)
router.delete('/words', deleteWords)

export default router
