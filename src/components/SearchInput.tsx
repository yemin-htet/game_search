import React from 'react'

interface Props{
    onSearch: (searchText: string) => void;
}

export default function SearchInput({onSearch}:Props) {
    const ref = React.useRef<HTMLInputElement>(null);
  return (
    <form className='w-[100%]' onSubmit={(event)=>{
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
    }}>
        <input ref={ref} type="text" placeholder='Search Games' className='border py-2 rounded-lg w-[100%] px-5 text-xl' />
    </form>
  )
}
