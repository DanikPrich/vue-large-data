import axios from 'axios'
import Word from '../models/Word.js'

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

// Moving random words to Mongo database
export const generateAndSaveWords = async () => {
  const count = await Word.countDocuments()
  if (count === 0) {
    const randomWords = await fetchRandomWords()
    const words = randomWords.map((word, index) => ({
      id: index + 1,
      title: word,
      order: index + 1,
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
  return await Word.find().sort({ order: 1 }).limit(10000)
}
