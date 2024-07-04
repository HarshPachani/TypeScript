import React, { useContext } from 'react'
import { ThemeContext } from '../App3';

const Box3 = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className='boxContainer' style={{ backgroundColor: theme === 'dark' ? 'rgb(40, 40, 40)' : 'white'}}>
        <h1 style={{ color: theme === 'dark' ? 'white' : 'rgb(40, 40, 40)'}}>Box 1</h1>
        <button onClick={toggleTheme}>Change Theme</button>
    </div>
  )
}

export default Box3