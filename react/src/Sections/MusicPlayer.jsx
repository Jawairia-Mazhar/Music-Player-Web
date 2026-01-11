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
    const [progress, setProgress] = React.useState(0); //to track progress
    const audioRef = React.useRef(null); // referring to audio element -useRef hook
    const [isPlaying, setIsPlaying] = React.useState(false); //for play/pause state

    React.useEffect(() => { // to update progress bar as audio plays
        const audio = audioRef.current; // get audio element .current is used to access the DOM element
        if (!audio) return; // safety check

        const updateProgress = () => { // function to update progress state
              if (!audio.duration) { setProgress(0); return; } // handle case where duration is not available
            const percent = 
            (audio.currentTime / audio.duration) * 100 || 0; // calculate percentage to update progress bar
            setProgress(percent); // update state with calculated percentage
        }

        audio.addEventListener('timeupdate', updateProgress); // listen for timeupdate event to update progress

        return () => { // cleanup function to remove event listener. why? to prevent memory leaks
            audio.removeEventListener('timeupdate', updateProgress);
        };
    }, []);
    
    const togglePlay = () => { // function to handle play/pause toggle
        const audio = audioRef.current;
        if(!audio) return;

        if(isPlaying){
            audio.pause(); // pause audio if currently playing
            setIsPlaying(false);
        } else {
            audio.play();
            setIsPlaying(true);
        }
    }

    React.useEffect(() => { // to handle audio end event
        const audio = audioRef.current; 
        if (!audio) return;

        const onEnded = () => setIsPlaying(false);  // reset play state when audio ends
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
        <div className='flex justify-between p-3 items-center'>
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
            <input type="range" // progress bar 
            min="0" //minimum value
            max="100" 
            value={progress} //progress state which updates as audio plays
            onChange={(e) => {
                const audio = audioRef.current;
                const newTime =
                (e.target.value / 100) * audio.duration;
                audio.currentTime = newTime;
            setProgress(e.target.value); // update progress state when user interacts with the slider
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

    <audio ref={audioRef} src={Audio}></audio> {/* audio element to play the music */}
    </footer>
  )
}

export default MusicPlayer