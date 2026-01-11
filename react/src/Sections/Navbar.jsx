import React from 'react'
import Icon from '../assets/micon.png';
import Home from '../assets/home.png';
import search from '../assets/search.png';

const Navbar = () => {
  return (
    <nav className= "flex shadow-lg shadow-green-500/50 gap-6 p-4 items-center fixed w-full z-10">
        <div className="Spotify-logo w-10 h-10 cursor-pointer">
            <img src={Icon} alt="Spotify Logo" />
        </div>

        <div className='Home-logo w-9 h-9 backdrop-blur-2xl cursor-pointer bg-green-600/40 rounded-full p-2'>
            <img src={Home} className='w-8 h-5' alt="Home logo" />
        </div>

        <div className='flex items-center gap-2 px-2 rounded-full border border-green-500 md:mx-125 md:px-5'>
          <img src={search} alt="search icon" className='input-icon w-5 h-5'/>
          <input type="text" name="q" placeholder="What do you want to play?" required className='rounded-full py-2 w-64 px-4 md:px-2'/>
        </div>
    </nav>
  )
}

export default Navbar