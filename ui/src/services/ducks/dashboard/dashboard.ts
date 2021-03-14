import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import apiClient, { GetPokemonsResponse } from '../../api/api'
import { Pokemon } from '../../api/types'
import { AppStoreState } from '../../store/store'


interface DashboardState {
  pokemons: Pokemon[]
  searchTerm: string | undefined,
  isLoading: boolean
  isSynced: boolean
}

const DEFAULT_INITIAL_STATE: DashboardState = {
  pokemons: [],
  searchTerm: undefined,
  isLoading: true,
  isSynced: false,
}

export const pokemonsSelector = (state: AppStoreState) => {
  return state.dashboard.pokemons
}

export const searchTermSelector = (state: AppStoreState) => {
  return state.dashboard.searchTerm
}

export const fetchPokemons = createAsyncThunk<GetPokemonsResponse, string | undefined>('dashboard/fetchPokemons', async (searchTerm?: string) => {
  return await apiClient.getPokemons(searchTerm)
})

const { reducer } = createSlice({
  name: 'dashboard',
  initialState: DEFAULT_INITIAL_STATE,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPokemons.pending, (state, action) => ({
      ...state,
      pokemons: [],
      isLoading: true,
      isSynced: false,
    }))
    builder.addCase(fetchPokemons.rejected, (state, action) => ({
      ...state,
      pokemons: [],
      isLoading: false,
      isSynced: true,
    }))
    builder.addCase(fetchPokemons.fulfilled, (state, action) => ({
      ...state,
      pokemons: action.payload.data,
      isLoading: false,
      isSynced: true,
    }))
  }
})

export default reducer