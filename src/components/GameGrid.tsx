
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';



export default function GameGrid() {
  const {games,error,isLoading} = useGames();
  const skeletons = [1,2,3,4,5,6,7,8,9]

  return (
    <>
        {error && <h1>{error}</h1>}
        <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2'>
          {isLoading && skeletons.map(skeleton => <GameCardSkeleton key={skeleton}/>) }
          {!isLoading && games.map(game => <GameCard key={game.id} game={game}/>)}
        </div>

    </>
    
  )
}








