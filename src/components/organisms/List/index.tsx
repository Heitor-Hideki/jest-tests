"use client";
import React, { useState } from "react"

interface IList {
  pokemons: string[];
}

export default function List({
  pokemons
}: IList) {
  const [newItem, setNewItem] = useState('');
  const [list, setList] = useState(pokemons);

  function addToList(){
    setList(state => [...state, newItem])
    setNewItem('');
  }

  function removeFromList(item: string){
    setList(state => state.filter(listItem => listItem !== item))
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <input 
        placeholder="Digite um pokémon"
        value={newItem} 
        onChange={(e) => setNewItem(e.target.value)}
        className="px-3 py-2 rounded-lg mb-4"
      />
      <button
        onClick={addToList}
        className="px-3 py-2 bg-yellow-50 rounded-lg text-black font-semibold shadow-md mb-8"
      >
        Adicionar
      </button>
      <ul className="flex flex-col gap-3">
        {
          list.map(item => 
            <li key={item}>
              {item}
              <button
                onClick={() => removeFromList(item)}
                className="px-2 py-1 bg-white rounded-lg ml-4 font-semibold"
              >
                Remover
              </button>
            </li>
          )
        }
      </ul>
    </div>
  )
}
