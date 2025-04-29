import React from 'react'
import { Game } from '../hooks/useGames'

interface Props{
    game: Game;
}

export default function GameCard({game}: Props) {
  return (
    <>
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg" src={game.background_image} alt="" />
    </a>
    <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{game.name}</h5>   
    </div>
    </div>
    
    </>
  )
}
