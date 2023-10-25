import pokeApi from "./services/pokeapi";
import { getPokemon, getPokemonSpecies } from "./services/requests";
import { mocked } from 'jest-mock'
import { speciesStub } from "./stubs/speciesStub";
import { pokemonStub } from "./stubs/pokemonStub";

jest.mock('./services/pokeapi');

const mockRequest = (res) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: res
      })
    }, 500)
  })
}

const mockFailedRequest = () => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject();
    }, 500)
  })
}

describe('API requests', () => {
  afterEach(() => {
    jest.restoreAllMocks
  })

  describe('Get species', () => {
    it('should return the desired pokemon species', async () => {
      const mockedApi = mocked(pokeApi)
      mockedApi.get.mockImplementation(() => mockRequest(speciesStub) as any)
      const pokeApiSpy = jest.spyOn(mockedApi, 'get')

      const yadon = (await getPokemonSpecies('slowpoke')).data

      expect(yadon).toEqual(speciesStub);
      expect(pokeApiSpy).toHaveBeenCalledWith('pokemon-species/slowpoke')
    });

    it('should return undefined when request fails', async () => {
      const mockedApi = mocked(pokeApi)
      mockedApi.get.mockImplementation(() => mockFailedRequest() as any)
      const pokeApiSpy = jest.spyOn(mockedApi, 'get')

      const yadon = (await getPokemonSpecies('fastpoke')).data

      expect(yadon).toEqual(undefined);
      expect(pokeApiSpy).toHaveBeenCalledWith('pokemon-species/fastpoke')
    });
  })

  describe('Get pokemon', () => {
    it('should return the desired pokemon', async () => {
      const mockedApi = mocked(pokeApi)
      mockedApi.get.mockImplementation(() => mockRequest(pokemonStub) as any)
      const pokeApiSpy = jest.spyOn(mockedApi, 'get')

      const yadon = (await getPokemon('slowpoke')).data

      expect(yadon).toEqual(pokemonStub);
      expect(pokeApiSpy).toHaveBeenCalledWith('pokemon/slowpoke')
    });

    it('should return undefined when request fails', async () => {
      const mockedApi = mocked(pokeApi)
      mockedApi.get.mockImplementation(() => mockFailedRequest() as any)
      const pokeApiSpy = jest.spyOn(mockedApi, 'get')

      const yadon = (await getPokemon('fastpoke')).data

      expect(yadon).toEqual(undefined);
      expect(pokeApiSpy).toHaveBeenCalledWith('pokemon/fastpoke')
    });
  })
})