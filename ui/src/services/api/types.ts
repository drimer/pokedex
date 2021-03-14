const PokemonType = {
    EARTH: 'EARTH',
    ELECTRIC: 'ELECTRIC',
    FIRE: 'FIRE',
    GRASS: 'GRASS',
    ROCK: 'ROCK',
    DARK: 'DARK',
    WATER: 'WATER',
}

export type PokemonType = keyof typeof PokemonType

export interface Pokemon {
    number: number
    name: string
    primaryType: PokemonType
    secondaryType: PokemonType
}