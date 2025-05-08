import useGenres, { Genre } from '../hooks/useGenres'
import getCroppedImage from '../services/image-url';
import Spinner from './Spinner';

interface Props{
  setSelectedGenre: (genre: Genre)=> void;
  selectedGenre: Genre | null;
}

export default function GenreList({selectedGenre,setSelectedGenre}: Props) {
  const {genres,error,isLoading} = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner/>;
  return (
    <>
      <h1 className='text-5xl font-bold pt-3 pb-7 ml-7'>Genre</h1>
      <ul className='flex flex-col gap-3 ml-7'>
        {genres.map(
          genre =>
          <li className='flex flex-row justify-start items-center' key={genre.id}>
            <img className='w-[35px] h-[35px] rounded-xl mr-2 object-cover' src={getCroppedImage(genre.image_background)} alt="" />
            <button className={`hover:underline ${genre.id === selectedGenre?.id? "font-bold text-2xl" : ""}`}
            onClick={()=> (setSelectedGenre(genre))}>{genre.name}</button>
          </li>)}
      </ul>
    </>
  )
}