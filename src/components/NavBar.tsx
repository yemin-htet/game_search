import logo from "../assets/logo.webp"
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

interface darkProps{
  handleDarkMode: (isChecked: boolean)=> void;
  onSearch: (searchText: string) => void
}

export default function NavBar({handleDarkMode, onSearch}:darkProps) {
  return (
    <div className='flex flex-row items-center justify-between px-5 py-3 my-3 gap-5'>
        <img className='w-[80px]' src={logo} alt="LogoPic" />
        <SearchInput onSearch={onSearch}/>
        <ColorModeSwitch handleDarkMode={handleDarkMode}/>
    </div>
  )
}
