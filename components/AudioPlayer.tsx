
import React, { useState, useRef, useEffect } from 'react';
import { PlayIcon, PauseIcon } from '../assets/icons';

interface AudioPlayerProps {
  audioSrc: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressBarRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const setAudioData = () => {
        setDuration(audio.duration);
        setCurrentTime(audio.currentTime);
      };

      const setAudioTime = () => setCurrentTime(audio.currentTime);

      audio.addEventListener('loadeddata', setAudioData);
      audio.addEventListener('timeupdate', setAudioTime);

      return () => {
        audio.removeEventListener('loadeddata', setAudioData);
        audio.removeEventListener('timeupdate', setAudioTime);
      };
    }
  }, []);
  
  useEffect(() => {
    if(progressBarRef.current) {
        progressBarRef.current.style.setProperty('--seek-before-width', `${(currentTime / duration) * 100}%`);
    }
  }, [currentTime, duration]);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return '00:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const onProgressChange = () => {
    if (audioRef.current && progressBarRef.current) {
        audioRef.current.currentTime = Number(progressBarRef.current.value);
    }
  };

  return (
    <div>
        <p className="mb-4 text-slate-600">
            Si prefieres escuchar, aquí tienes un resumen en audio de nuestra política de tratamiento de datos.
        </p>
        <div className="bg-slate-100 p-4 rounded-lg flex items-center space-x-4 border border-slate-200">
            <audio ref={audioRef} src={audioSrc} preload="metadata"></audio>
            <button
                onClick={togglePlayPause}
                className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-transform transform hover:scale-110"
            >
                {isPlaying ? <PauseIcon /> : <PlayIcon />}
            </button>
            <div className="flex items-center w-full space-x-3">
                <span className="text-sm font-medium text-slate-500 w-12 text-center">{formatTime(currentTime)}</span>
                <input
                    ref={progressBarRef}
                    type="range"
                    min="0"
                    max={duration || 0}
                    value={currentTime}
                    onChange={onProgressChange}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <span className="text-sm font-medium text-slate-500 w-12 text-center">{formatTime(duration)}</span>
            </div>
        </div>
    </div>
  );
};

export default AudioPlayer;
