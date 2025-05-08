import { GameQuery } from '../App';

interface Props{
    gameQuery: GameQuery;
}

export default function GameHeading({gameQuery}:Props) {
    const heading = `${gameQuery.platform? gameQuery.platform.name: ""} ${gameQuery.genre? gameQuery.genre.name:""} Games`
  return (
    <div className='text-5xl font-bold'>{heading}</div>
  )
}
