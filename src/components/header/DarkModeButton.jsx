import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5'
import Button from '../button/Button'

const DarkModeButton = ({toggleDarkMode, darkMode}) => {
  return (
    
        <Button onClick={toggleDarkMode}>
            {darkMode ? <IoSunnyOutline/> : <IoMoonOutline/>}
        </Button>
    
  )
}

export default DarkModeButton