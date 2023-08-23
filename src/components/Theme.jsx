import React, { useState } from 'react'
import './Theme.css'

const Theme=()=> {
    const [themechange, setThemechange] = useState(false);

    const ThemeSwitch = () => {
        setThemechange((themechange) => (!themechange))
    }

  return (
    <div className={`change-theme ${themechange ? 'dark' : 'white'}`}>
        <div className='btn'>
            <button className='theme-button' onClick={ThemeSwitch}>Switch Theme</button>
        </div>
    </div>
  )
}

export default Theme