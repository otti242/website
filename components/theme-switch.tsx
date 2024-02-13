"use client";

import React from 'react';
import {BsMoon, BsSun} from 'react-icons/bs';
import {useTheme} from '@/context/theme-context';



export default function ThemeSwitch() {
    const {theme, toggleTheme} = useTheme();

    return (
        <button className='fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-60 backdrop-blur-[5px] border border-white border-opacity-40 shadow-xl rounded-full flex items-center justify-center
        hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950'
        onClick={toggleTheme}
        >
            {
                theme === "light" ? <BsSun /> : <BsMoon />
            }
            
        </button>
  )
}