import type { APIDragonBallResponse } from '../types/api'

const getCharacters = async () => {
  const response = await fetch('https://dragonball-api.com/api/characters?limit=15')
  const { items } = (await response.json()) as APIDragonBallResponse
  if (!response.ok) {
    throw new Error('Failed to fetch characters')
  }
  return items
}

export { getCharacters }
