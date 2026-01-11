import React from 'react'
import BookImg from '../assets/BookCover.webp';

const InfoBar = () => {
    const playlists = [
        { title: 'Think and Grow Rick', img: {BookImg}, artist:"Napoleon Hill" },
        { title: 'My Playlist #2', img: BookImg },
        { title: 'My Playlist #3', img: BookImg },
        { title: 'My Playlist #4', img: BookImg },
        { title: 'My Playlist #5', img: BookImg },
    ]
  return (
    <aside className='invisible md:visible w-100 h-144  bg-green-200 flex flex-col right-0 fixed p-4 md:mt-19'>
        <h1 className='font-bold ml-3'>{playlists[0].title}</h1>
        <img src={BookImg} alt="" className=' w-100 h-110 p-4 '/>
        <span className='font-semibold ml-3'>{playlists[0].artist}</span>
    </aside>
  )
}

export default InfoBar