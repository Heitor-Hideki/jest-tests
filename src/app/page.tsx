import RedirectButton from "@/components/atoms/RedirectButton"
import List from "@/components/molecules/List"
import Image from "next/image"
import React from "react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 bg-pink-400">
      <Image src="/yadoran.png" alt="yadoran" width="80" height="80" />
      <h1 className="text-2xl mb-8 font-bold">Hello yadoran</h1>

      <List 
        pokemons={['yadoran', 'yadon', 'yadoking']} 
      />

      <div className="mt-8"/>
      
      <div className='flex flex-row gap-3'>
        <RedirectButton 
          pageName="yadoking"
        />
        <RedirectButton 
          pageName="pokedex"
        />
      </div>

    </main>
  )
}
