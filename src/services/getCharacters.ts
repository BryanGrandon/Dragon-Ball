import type { APIDragonBallResponse } from '../types/api'

const getCharacters = async (url: string) => {
  const response = await fetch(url)
  const { items, links } = (await response.json()) as APIDragonBallResponse
  return { characters: items, links }
}

export { getCharacters }
