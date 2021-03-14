import { Pokemon } from "./types";
import instance, { ClientOptions } from "./utils";

export type GetPokemonsResponse = {
    data: Array<Pokemon>
}

const getPokemons = async (options: ClientOptions, searchTerm?: string): Promise<GetPokemonsResponse> => {
    if (searchTerm !== undefined) {
        return await instance(options).get(`/pokemons?name=${searchTerm}`)
    } else {
        return await instance(options).get('/pokemons')
    }
}

function createClientInstance(options: ClientOptions) {
    return {
        getPokemons: (searchTerm?: string) => getPokemons(options, searchTerm)
    }
}

const getApi = () => {
    const options = {baseUrl: "/"}
    return createClientInstance(options)
}

export type ClientApi = ReturnType<typeof createClientInstance>
export default getApi()
