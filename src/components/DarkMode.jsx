import React, { useState } from 'react'
import { BsSunFill } from "react-icons/bs";
import { BsMoonStarsFill } from "react-icons/bs";

const ToggleDarkMode = () => {
    const [darkMode, setDarkMode] = useState(false);

    const handleClick = () => {
        setDarkMode(!darkMode);
        if (!darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }

  return (
    <button className='bg-pink-100 dark:bg-blue-100 py-2 px-4 rounded-lg'
    onClick={handleClick}>
        {darkMode ? <BsSunFill className='text-[#7C4BE7]' /> : <BsMoonStarsFill className='text-pink-600' />}
    </button>
  )
}

export default ToggleDarkMode