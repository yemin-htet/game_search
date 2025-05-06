import React from 'react'

export default function SortSelector() {
  const [isOpen,setIsOpen] = React.useState(false);
  const numList = ["Relevance","Date added","Name","Popularity","Average Rating"]
  return (
    <>
         <div className="relative  text-left">
            <div>
                <button
                    onClick={()=> setIsOpen(!isOpen)}
                    className="inline-flex justify-center w-[200px] rounded-md 
                    border border-gray-300 shadow-sm px-4 py-2 bg-white 
                    text-sm font-medium text-gray-700 hover:bg-gray-50 
                    focus:outline-none"
                >
                    Order by: Relevance
                    <svg
                        className="ml-2 -mr-1 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </button>
            </div>

            {isOpen && (
                <div
                    className="origin-top-left absolute left-0 mt-2 w-[200px]
                    rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5
                    focus:outline-none"
                    role="menu"
                >
                    <div className="py-1" role="none">
                        {numList.map((num)=> <button className="block px-4 py-2 text-black">{num}</button>)}
                   </div>
                </div>
            )}
        </div>
    </>
  )
}
