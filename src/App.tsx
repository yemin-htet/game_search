import React from "react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  const [dark,setDark] = React.useState<boolean>(false);
  function handleDarkMode(isChecked : boolean): void{
    setDark(isChecked);
  }

  return (
    <>
      <div className={`w-screen h-full dark:bg-gray-900 ${dark? 'dark':""}`}>
        <div className="grid grid-cols-5 gap-1">
          <div className="col-span-5">
            <NavBar handleDarkMode={handleDarkMode}></NavBar>
          </div>
          <div className="col-span-1 hidden sm:block dark:text-white">
            <GenreList/>
          </div>
          <div className="col-span-5 sm:col-span-4 dark:text-white px-7 py-5">
            <GameGrid/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
