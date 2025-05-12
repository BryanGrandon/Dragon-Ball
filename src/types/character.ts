export interface APICharacterResponse {
  readonly id: number
  readonly name: string
  readonly ki: string
  readonly maxKi: string
  readonly race: string
  readonly gender: string
  readonly description: string
  readonly image: string
  readonly affiliation: string
  readonly deletedAt: null
  readonly statusCode: number
  readonly originPlanet: OriginPlanet
  readonly transformations: Transformation[]
}

export interface OriginPlanet {
  readonly id: number
  readonly name: string
  readonly isDestroyed: boolean
  readonly description: string
  readonly image: string
  readonly deletedAt: null
}

export interface Transformation {
  readonly id: number
  readonly name: string
  readonly image: string
  readonly ki: string
  readonly deletedAt: null
}
