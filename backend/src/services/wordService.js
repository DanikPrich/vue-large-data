import axios from 'axios'
import Word from '../models/Word.js'
import uniqid from 'uniqid'

// Getting random words from extend API
export const fetchRandomWords = async () => {
  try {
    const response = await axios.get('https://random-word-api.herokuapp.com/word?number=10000')
    return response.data
  } catch (err) {
    console.error('Random words error:', err)
    return []
  }
}

// Generating random words to Mongo database if DB is empty
export const generateAndSaveWords = async () => {
  const count = await Word.countDocuments()
  if (count === 0) {
    const randomWords = await fetchRandomWords()
    const words = randomWords.map((word) => ({
      id: uniqid(),
      title: word,
    }))

    await Word.insertMany(words)
  }
}

// Removing all words from database
export const deleteAllWords = async () => {
  await Word.deleteMany({})
}

// Getting all words from database
export const getAllWords = async () => {
  await generateAndSaveWords()
  return await Word.find().sort({ order: 1 }).limit(10000)
}
