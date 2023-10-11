import List from "@/components/organisms/List";
import React from "react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 bg-pink-400">
      <h1 className="text-2xl mb-8 font-bold">Hello yadoran</h1>

      <List 
        pokemons={['yadoran', 'yadon', 'yadoking']} 
      />
    </main>
  )
}
