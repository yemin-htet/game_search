import React from "react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface GameQuery{
  genre : Genre | null,
  platform: Platform | null
}



function App() {
  const [gameQuery,setGameQuery] = React.useState<GameQuery>({} as GameQuery)
  const [dark,setDark] = React.useState<boolean>(false);
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
            <GenreList selectedGenre={gameQuery.genre} setSelectedGenre={(genre) => setGameQuery({...gameQuery, genre})}/>
          </div>
          <div className="dark:text-white px-7 py-5 flex-10/12 flex flex-col gap-3">
              
              <div className="flex flex-row items-start gap-2">
                <PlatformSelector selectedPlatform={gameQuery.platform} setSelectedPlatform={(platform) => setGameQuery({...gameQuery, platform})}/>
                <SortSelector/>
              </div>
            <GameGrid gameQuery={gameQuery}/>
          </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
