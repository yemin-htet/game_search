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
        <div className="flex flex-col">
          <div className="nav">
          <NavBar handleDarkMode={handleDarkMode}></NavBar>
          </div>
          <div className="body flex flex-row">
          <div className="dark:text-white flex-2/12 md:block hidden">
            <GenreList/>
          </div>
          <div className="dark:text-white px-7 py-5 flex-10/12">
            <GameGrid/>
          </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
