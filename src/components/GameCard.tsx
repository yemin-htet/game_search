
import { Game } from '../hooks/useGames'
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImage from '../services/image-url';
import noimage from '../assets/no-image-placeholder.webp'

interface Props{
    game: Game;
}

export default function GameCard({game}: Props) {
  return (
    <>
    <div className="max-w-sm h-auto  bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg" src={
          game.background_image? getCroppedImage(game.background_image) : noimage} alt="" />
    </a>
    <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{game.name}</h5>

        <div className="flex flex-row justify-between flex-wrap">
          <PlatformIconList platforms={game.parent_platforms.map(({platform})=> platform)}/>
          <CriticScore score={game.metacritic}/>
          
        </div>
    </div>
    </div>
    
    </>
  )
}
