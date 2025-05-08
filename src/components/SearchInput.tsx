import React from 'react'
import { CiSearch } from "react-icons/ci";


interface Props{
    onSearch: (searchText: string) => void;
}

export default function SearchInput({onSearch}:Props) {
    const ref = React.useRef<HTMLInputElement>(null);
  return (
    <form className='w-[100%] relative' onSubmit={(event)=>{
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
    }}>
        <CiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl text-gray-500" />
        <input ref={ref} type="text" placeholder='Search Games' className='dark:text-white dark:border-gray-50 border py-2 rounded-lg w-[100%] px-10 text-xl' />
    </form>
  )
}
