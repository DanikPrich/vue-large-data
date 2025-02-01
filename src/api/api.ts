import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
})

export const getWordsList = async () => {
  try {
    const { data } = await api.get('/words')
    return data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('Axios error:', error.message)
    } else {
      console.log('Unexpected error:', error)
    }
  }
}

export const removeAllWords = async () => {
  try {
    const { data } = await api.delete('/words')
    return data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('Axios error:', error.message)
    } else {
      console.log('Unexpected error:', error)
    }
  }
}
