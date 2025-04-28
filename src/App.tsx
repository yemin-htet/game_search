

function App() {
  return (
    <>
      <div className="grid grid-cols-2 gap-1">
        <div className="col-span-2 bg-blue-400">Nav</div>
        <div className="bg-amber-300 hidden sm:block">Aside</div>
        <div className="bg-green-500 col-span-2 sm:col-span-1">Main</div>
      </div>
    </>
  )
}

export default App
