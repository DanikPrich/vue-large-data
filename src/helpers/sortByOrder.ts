import type { IWord } from '@/types/Word'

// Sorting words by order from LocalStore
export default function sortByOrder(wordsList: IWord[], orders: string[]) {
  const idToObjectMap = new Map()
  wordsList.forEach((obj) => idToObjectMap.set(obj.id, obj))
  return orders.map((id) => idToObjectMap.get(id)).filter(Boolean)
}
