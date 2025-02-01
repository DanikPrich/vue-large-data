import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
})

export const getTestData = async () => {
  try {
    const { data } = await api.get('/test-data')
    return data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('Axios error:', error.message)
    } else {
      console.log('Unexpected error:', error)
    }
  }
}
