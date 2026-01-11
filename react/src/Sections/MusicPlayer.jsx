import React from 'react'
import BackBtn from "../assets/back.png";
import PlayBtn from "../assets/play.png";   
import NextBtn from "../assets/next.png";
import mute from "../assets/mute.png";
import displayFrame from "../assets/display-frame.png";
import fullscreen from "../assets/full-screen.png";
import Audio from "../assets/sample-audio.mp3";
import PauseBtn from '../assets/pause.png';

const MusicPlayer = () => {
    const [progress, setProgress] = React.useState(0);
    const audioRef = React.useRef(null);
    const [isPlaying, setIsPlaying] = React.useState(false);

    React.useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const updateProgress = () => {
              if (!audio.duration) { setProgress(0); return; }
            const percent = 
            (audio.currentTime / audio.duration) * 100 || 0;
            setProgress(percent);
        }

        audio.addEventListener('timeupdate', updateProgress);

        return () => {
            audio.removeEventListener('timeupdate', updateProgress);
        };
    }, []);
    
    const togglePlay = () => {
        const audio = audioRef.current;
        if(!audio) return;

        if(isPlaying){
            audio.pause();
            setIsPlaying(false);
        } else {
            audio.play();
            setIsPlaying(true);
        }
    }

    React.useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const onEnded = () => setIsPlaying(false);
        audio.addEventListener("ended", onEnded);

        return () => {
            audio.removeEventListener("ended", onEnded);
        };
    })

  return (
    <footer className="hidden md:flex bg-amber-100 bottom-0 w-full h-8 md:h-20 fixed justify-between p-2 md:p-4 items-center">
    <div className='flex items-center gap-4 p-2'>
        <img src="" alt="song cover" className='w-10 h-10'/>

        <div className='flex flex-col'>
            <h3 className='text-sm font-semibold'>Song Name</h3>
            <span className='text-xs'>Artist Name</span>
        </div>

    </div>

    <div className='items-center'>
        <div className='flex gap-8 p-3 items-center'>
        <img src={BackBtn} alt="" className='w-5 h-5'/>
{/* play button */}
        <div className='bg-amber-300 w-9 h-9 justify-center items-center flex rounded-full'
        onClick={togglePlay}>
            <img 
            src={isPlaying ? PauseBtn : PlayBtn} 
            alt="play-pause" 
            className='w-4 h-4 cursor-pointer'/>
        </div>

        <img src={NextBtn} alt="" className='w-5 h-5'/> 
        </div>

        <div>
            <input type="range" 
            min="0" 
            max="100" 
            value={progress} 
            onChange={(e) => {
                const audio = audioRef.current;
                const newTime =
                (e.target.value / 100) * audio.duration;
                audio.currentTime = newTime;
            setProgress(e.target.value);
            }}        
            className='w-48 accent-black'
            />
            
        </div>
    </div>


    <div className='flex items-center p-3 gap-5 '>
        <img src={mute} alt="mute icon" className='w-4 h-4 inline mr-4 cursor-pointer'/>
        <img src={displayFrame} alt="display frame icon" className='w-4 h-4 inline mr-4 cursor-pointer'/>
        <img src={fullscreen} alt="full screen icon" className='w-4 h-4 inline cursor-pointer'/>
    </div>

    <audio ref={audioRef} src={Audio}></audio>
    </footer>
  )
}

export default MusicPlayer