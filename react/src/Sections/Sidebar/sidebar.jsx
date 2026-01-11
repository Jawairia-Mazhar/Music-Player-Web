import React from 'react'
import Add from '../../assets/addmusic.png';

const sidebar = () => {
  return (
    <aside className='w-18 h-144 bg-amber-200 text-white md:p-4 md:mt-19 fixed'>
      <div className='flex flex-col items-center'>
        <img src={Add} alt="Add Music" className='w-8 h-8 mb-4' />
      </div>
    </aside>
  )
}

export default sidebar