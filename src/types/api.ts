export interface APIDragonBallResponse {
  readonly items: Item[]
  readonly meta: Meta
  readonly links: Links
}

export interface Item {
  readonly id: number
  readonly name: string
  readonly ki: string
  readonly maxKi: string
  readonly race: string
  readonly gender: Gender
  readonly description: string
  readonly image: string
  readonly affiliation: Affiliation
  readonly deletedAt: null
}

export enum Affiliation {
  ArmyOfFrieza = 'Army of Frieza',
  Freelancer = 'Freelancer',
  ZFighter = 'Z Fighter',
}

export enum Gender {
  Female = 'Female',
  Male = 'Male',
}

export interface Links {
  readonly first: string
  readonly previous: string
  readonly next: string
  readonly last: string
}

export interface Meta {
  readonly totalItems: number
  readonly itemCount: number
  readonly itemsPerPage: number
  readonly totalPages: number
  readonly currentPage: number
}
