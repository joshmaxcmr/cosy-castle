import React from 'react'
import ToggleMenuButton from './ToggleMenuButton'

const Header = ({toggleSidebar}) => {
  return (
    <div>
        <div>
            <ToggleMenuButton toggleSidebar={toggleSidebar}/>
        </div>
    </div>
  )
}

export default Header