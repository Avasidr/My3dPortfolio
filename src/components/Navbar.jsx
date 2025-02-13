import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { menu, close } from '../assets';
import ToggleDarkMode from './DarkMode';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex 
      items-center py-5 fixed top-0 z-20 
      bg-[#F6F7F9] dark:bg-[#040720]`}
    >
      <div className='w-full flex justify-between 
      items-center max-w-7xl mx-auto'>
        <Link 
        to='/'
        className='flex items-center gap-2'
        onClick={() => {
          setActive('');
          window.scrollTo(0, 0);
        }}>
          <p className='text-pink-600 dark:text-[#7C4BE7] text-[18px] 
          font-bold cursor-pointer flex'>
            <span className='sm:block hidden'>Avasidr Codes</span>
          </p>
        </Link>

        <ToggleDarkMode />

        <ul className='list-none hidden sm:flex 
        flex-row gap-10'>
          {navLinks.map((link) => (
            <li 
            key={link.id}
            className={`${active === link.title 
              ? 'text-pink-200 dark:text-blue-200' 
              : 'text-pink-600 dark:text-[#7C4BE7]'} hover:text-pink-200 dark:hover:text-blue-200 text-[18px] 
              font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 
        justify-end items-center'>
          <img src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] 
            object-contain cursor-pointer bg-pink-300 dark:bg-[#040720]'
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-pink-100 dark:bg-[#040720] absolute 
          top-20 right-0 mx-4 -my-6 min-w[140px] 
          z-10 rounded-xl`}>
            <ul className='list-none flex 
            justify-end items-start flex-col gap-4'>
            {navLinks.map((link) => (
              <li 
                key={link.id}
                className={`${
                  active === link.title 
                    ? 'text-pink-200 dark:text-blue-200' 
                    : 'text-pink-600 dark:text-[#7C4BE7]'
                  } font-poppins font-medium 
                cursor-pointer text-[16px]`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(link.title);
                }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar