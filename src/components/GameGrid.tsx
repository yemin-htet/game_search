import useGames, { Platform } from '../hooks/useGames';
import { Genre } from '../hooks/useGenres';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

interface Props{
  selectedGenre : Genre | null;
  selectedPlatform: Platform | null;
}


export default function GameGrid({selectedGenre, selectedPlatform}:Props) {
  const {data,error,isLoading} = useGames(selectedGenre, selectedPlatform);
  const skeletons = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  if (isLoading) return (
    <>
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5'>
          {skeletons.map(skeleton => <GameCardSkeleton key={skeleton}/>) }
         
        </div>
    </>
  )

  return (
    <>
        {error && <h1>{error}</h1>}
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5'>
          
          {data.map(d => <GameCard key={d.id} game={d}/>)}
        </div>

    </>
    
  )
}








