
import useGenres from '../hooks/useGenres'
import getCroppedImage from '../services/image-url';

export default function GenreList() {
  const {genres,error,isLoading} = useGenres();
  return (
    <ul className='flex flex-col gap-3 ml-7'>
      {genres.map(
        genre => 
        <li className='flex flex-row justify-start items-center'>
          <img className='w-[35px] h-[35px] rounded-xl mr-2' src={getCroppedImage(genre.image_background)} alt="" />
          <h1>{genre.name}</h1>
        </li>)}
    </ul>
  )
}