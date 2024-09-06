import { http } from '../plugins'

// Funcion que recibe un id y devuelve el nombre del pokemon
export const getPokemonById = async (id: string | number): Promise<string> => {

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`

    const pokemon = await http.get(url)       
    return pokemon.name

}



