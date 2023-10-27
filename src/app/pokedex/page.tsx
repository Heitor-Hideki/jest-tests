"use client"
import { getPokemon } from "@/services/requests";
import Image from "next/image";
import React, { useState } from "react"

export default function Pokedex() {
  const [pokeInput, setPokeInput] = useState<string>("");
  const [pokemon, setPokemon] = useState<any>();

  const onSearch = async () => {
    setPokeInput("")

    const result = await getPokemon(pokeInput)
    setPokemon(result.data)

    setTimeout(() => {
      setPokemon(undefined);
    }, 3000)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 bg-pink-400">
      <h1 className="text-2xl mb-8 font-bold">Pokédex</h1>

      <input
        placeholder="Digite um pokémon"
        value={pokeInput}
        onChange={(e) => setPokeInput(e.target.value)}
        className="px-3 py-2 rounded-lg"
      />
      <button
        data-testid= {'searchButton'}
        disabled={!pokeInput}
        onClick={onSearch}
        className="px-3 py-2 rounded-lg bg-yellow-50 mt-8 disabled:bg-zinc-300"
      >
        Pesquisar
      </button>

      {
        pokemon && (
          <div className="flex flex-col justify-center items-center mt-8">
            {pokemon.name}
            <Image 
              data-testid= {'pokemonSprite'}
              src={pokemon.sprites.front_default} 
              alt={`${pokemon.name}-sprite`}
              height={160}
              width={160}
            />
          </div>
        )
      }
    </main>
  )
}
