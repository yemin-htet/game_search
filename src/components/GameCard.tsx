import React from 'react'
import { Game } from '../hooks/useGames'
import PlatformIconList from './PlatformIconList';

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
        <PlatformIconList platforms={game.parent_platforms.map(({platform})=> platform)}/>
        
    </div>
    </div>
    
    </>
  )
}
