import React from "react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";


function App() {
  const [dark,setDark] = React.useState<boolean>(false);
  const [selectedGenre,setSelectedGenre] = React.useState<Genre | null>(null)
  const [selectedPlatform, setSelectedPlatform] = React.useState<Platform | null>(null)
  function handleDarkMode(isChecked : boolean): void{
    setDark(isChecked);
  }
  return (
    <>
      <div className={`w-screen h-full bg-gray-100 dark:bg-gray-900 ${dark? 'dark':""}`}>
        <div className="flex flex-col">
          <div className="nav">
          <NavBar handleDarkMode={handleDarkMode}></NavBar>
          </div>
          <div className="body flex flex-row">
          <div className="dark:text-white flex-2/12 lg:block hidden px-0">
            <GenreList selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre}/>
          </div>
          <div className="dark:text-white px-7 py-5 flex-10/12 flex flex-col gap-3">
            <PlatformSelector selectedPlatform={selectedPlatform} setSelectedPlatform={setSelectedPlatform}/>
            <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform}/>
          </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
