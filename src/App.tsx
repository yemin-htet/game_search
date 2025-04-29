import React from "react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid";

function App() {
  const [dark,setDark] = React.useState<boolean>(false);

  function handleDarkMode(isChecked : boolean): void{
    setDark(isChecked);
  }

  return (
    <>
      <div className={`w-screen h-screen dark:bg-gray-900 ${dark? 'dark':""}`}>
        <div className="grid grid-cols-2 gap-1">
          <div className="col-span-2">
            <NavBar handleDarkMode={handleDarkMode}></NavBar>
          </div>
          <div className="bg-amber-300 hidden sm:block dark:text-white">Aside</div>
          <div className="bg-green-500 col-span-2 sm:col-span-1 dark:text-white">
            <GameGrid/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
