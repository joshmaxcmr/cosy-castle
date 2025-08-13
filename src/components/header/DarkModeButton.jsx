import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5'
import Button from '../button/Button'

const DarkModeButton = ({toggleDarkMode, darkMode}) => {
  return (
    
        <Button onClick={toggleDarkMode}>
            {darkMode ? <IoSunnyOutline className="text-2xl"/   > : <IoMoonOutline className="text-2xl"/>}
        </Button>
    
  )
}

export default DarkModeButton