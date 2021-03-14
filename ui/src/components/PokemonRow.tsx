import { Pokemon } from "../services/api/types"
import { StyledPokemonItem } from "./styled/StyledPokemonRow"

export interface PokemonProps {
    pokemon: Pokemon
}

export const PokemonItem: React.FC<PokemonProps> = ({pokemon}) => {
    return <StyledPokemonItem>
        <div>#{pokemon.number}</div>
        <div>Name: {pokemon.name}</div>
        <div>Type: {pokemon.primaryType}{pokemon.secondaryType && `/${pokemon.secondaryType}`}</div>
    </StyledPokemonItem>
}