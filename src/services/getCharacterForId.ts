import { URL_API } from '../constants/apis'
import type { APICharacterResponse } from '../types/character'

const getCharacterForId = async (id: string) => {
  const response = await fetch(`${URL_API}/${id}`)
  const data = (await response.json()) as APICharacterResponse
  return data
}

export { getCharacterForId }
