"use client"
import React, { useState } from "react"

export default function Pokedex() {
  const [pokeInput, setPokeInput] = useState<string>("");

  const onSearch = () => {
    setPokeInput("")
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
    </main>
  )
}
