import type { APIDragonBallResponse } from '../types/api'
import type { APICharacterResponse } from '../types/character'

const getCharacters = async () => {
  const response = await fetch('https://dragonball-api.com/api/characters?limit=15')
  const { items } = (await response.json()) as APIDragonBallResponse
  return items
}

const getCharacterForId = async (id: string) => {
  const response = await fetch(`https://dragonball-api.com/api/characters/${id}`)
  const data = (await response.json()) as APICharacterResponse
  return data
}

export { getCharacters, getCharacterForId }
