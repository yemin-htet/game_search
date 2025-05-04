import React from "react"
import usePlatform from "../hooks/usePlatform";
import Spinner from "./Spinner";
import { Platform } from "../hooks/useGames";

interface Props{
    setSelectedPlatform: (platform: Platform | null) => void;
    selectedPlatform: Platform | null;
}

export default function PlatformSelector({setSelectedPlatform, selectedPlatform}:Props) {
  const [isOpen,setIsOpen] = React.useState(false);
  const {data,error,isLoading} = usePlatform();
  if(error) return null;
  if(isLoading) return <Spinner/>;
  return (
    <>
         <div className="relative inline-block text-left">
            <div>
                <button
                    onClick={()=> setIsOpen(!isOpen)}
                    className="inline-flex justify-center w-2/12 rounded-md 
                    border border-gray-300 shadow-sm px-4 py-2 bg-white 
                    text-sm font-medium text-gray-700 hover:bg-gray-50 
                    focus:outline-none"
                >
                    {selectedPlatform? selectedPlatform.name:"Options"}
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
                    className="origin-top-left absolute left-0 mt-2 w-2/12
                    rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5
                    focus:outline-none"
                    role="menu"
                >
                    <div className="py-1" role="none">
                        {data.map(platform => <button onClick={()=> (setSelectedPlatform(platform))} className="block px-4 py-2 text-black">{platform.name}</button> )}
                    </div>
                </div>
            )}
        </div>
    </>
  )
}
