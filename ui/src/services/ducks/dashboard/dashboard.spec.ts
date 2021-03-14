import reducer, { fetchPokemons } from './dashboard'

describe('dashboard reducers', () => {
    it('handles fetchPokemons.fulfilled correctly', () => {
        const obj = {
            data: [{number: 123, name: 'Test pokemon', primaryType: 'water'}]
          }
          const result = reducer(undefined, {
            type: fetchPokemons.fulfilled,
            payload: obj
          })
      
          expect(result.pokemons).toEqual(obj.data)
          expect(result.isLoading).toEqual(false)
          expect(result.isSynced).toEqual(true)
    })
})