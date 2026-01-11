import React from 'react'
import Navbar from './Sections/Navbar.jsx'
import Sidebar from './Sections/Sidebar/sidebar.jsx'
import MusicPlayer from './Sections/musicPlayer.jsx'
import InfoBar from './Sections/InfoBar.jsx'

const App = () => {
  return (
    <>
      <Navbar />  
      <Sidebar />
      <MusicPlayer />
      <InfoBar />
    </>
  )
}

export default App