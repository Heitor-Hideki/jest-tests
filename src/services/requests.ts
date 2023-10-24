import pokeApi from "./pokeapi";

export async function getPokemonSpecies(pokemon: string){
  try {
    const result = await pokeApi.get(`pokemon-species/${pokemon}`);

    return result
  } catch (error) {
    return {data: undefined};
  }
}

export async function getPokemon(pokemon: string){
  try {
    const result = await pokeApi.get(`pokemon/${pokemon}`);

    return result
  } catch (error) {
    return {data: undefined};
  }
}