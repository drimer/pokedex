import React, { ChangeEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PokemonItem } from '../components/PokemonRow';
import { SearchField } from '../components/SearchField';
import { StyledPokemonList } from '../components/styled/StyledPokemonRow';
import { fetchPokemons, pokemonsSelector, searchTermSelector } from '../services/ducks/dashboard/dashboard';
import './App.css';

function App() {
  const dispatch = useDispatch()

  const pokemons = useSelector(pokemonsSelector)
  const searchTerm = useSelector(searchTermSelector)

  useEffect(() => {
    dispatch(fetchPokemons())
  }, [dispatch])

  const onSearchChangeHandler = (ev: ChangeEvent<HTMLInputElement>) => {
    dispatch(fetchPokemons(ev.target.value))
  }

  return (
    <div className="App">
      <div>
        <SearchField value={searchTerm} onChange={onSearchChangeHandler} />
      </div>

      <StyledPokemonList>
        {pokemons.map(pokemon => {
          return <PokemonItem pokemon={pokemon}/>
        })
        }
      </StyledPokemonList>
    </div>
  );
}

export default App;
