
import useGames from '../hooks/useGames';
import GameCard from './GameCard';



export default function GameGrid() {
  const {games,error} = useGames();

  return (
    <>
        {error && <h1>{error}</h1>}
        <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2'>
          {games.map(game => <GameCard game={game}/>)}
        </div>
        
    </>
    
  )
}








