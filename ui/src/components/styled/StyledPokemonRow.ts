import styled from '@emotion/styled'
import { white } from '../../common/styles'

export const StyledPokemonItem = styled.div`
    background-color: ${white};
    flex: 0 0 17%;
    border-radius: 10px;
    margin: 5px;
`

export const StyledPokemonList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex-basis: 100%;
    padding: 10px;
`