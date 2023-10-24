import pokeApi from "./pokeapi";

export async function getPokemonSpecies(pokemon: string){
  try {
    const result = await pokeApi.get(`pokemon-species/${pokemon}`);

    return result
  } catch (error) {
    return {data: {}};
  }
}