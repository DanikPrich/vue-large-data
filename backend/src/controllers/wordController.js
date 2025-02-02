import { getAllWords, deleteAllWords } from '../services/wordService.js'

export const getWords = async (_, res) => {
  try {
    const words = await getAllWords()
    res.json(words)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export const deleteWords = async (_, res) => {
  try {
    await deleteAllWords()
    res.json({ message: 'Words was deleted' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export const updateWords = async () => {}
