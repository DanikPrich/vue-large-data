import express from 'express'
import { getWords, deleteWords, updateWords } from '../controllers/wordController.js'

const router = express.Router()

router.get('/words', getWords)
router.delete('/words', deleteWords)
router.post('/words', updateWords)

export default router
