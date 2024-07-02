import React, { useEffect, useRef } from 'react';
import './BackgroundVideo.css';
import myVideo from './video/sunrise.mp4';
// import React from 'react';
import myImage from './image/rk_img.png'; 
import { useNavigate } from 'react-router-dom';
import useBlockBackNavigation from './useBlockBackNavigation';
// import BackgroundVideo from './BackgroundVideo';

const BackgroundVideo = () => {
  const videoRef = useRef(null);
  const navigate = useNavigate();
    useBlockBackNavigation();

    const handleEasyButtonClick = () => {
        navigate('/easy');
    };
    const handleMediumButtonClick = () => {
        navigate('/medium');
    };
    const handleHardButtonClick = () => {
        navigate('/hard');
    };

    useEffect(() => {
        const video = videoRef.current;
    
        const playVideo = () => {
          if (video) {
            const playPromise = video.play();
            if (playPromise !== undefined) {
              playPromise.catch((error) => {
                console.log('Autoplay was prevented:', error);
                // Retry playback after 1 second
                setTimeout(playVideo, 1000);
              });
            }
          }
        };
    
        const handleCanPlay = () => {
          playVideo();
        };
    
        // Attempt to play the video when the component mounts
        playVideo();
    
        // Add event listener for the canplay event
        video.addEventListener('canplay', handleCanPlay);
    
        return () => {
          // Clean up event listener
          video.removeEventListener('canplay', handleCanPlay);
        };
      }, []);
  return (
    <div className="video-container">
      <video ref={videoRef} loop className="video-background">
        <source src={myVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
      <div className='img'>
            <img src={myImage} alt="Description of the image" />
            </div>
            
            <div className='home-cont'>
                <h1 className='hh'>Welcome To Guess Game 🎮 </h1>
                <h4>Choose your level</h4>
                <button className='easy-btn' onClick={handleEasyButtonClick}>Easy</button>
                <button className='medium-btn' onClick={handleMediumButtonClick}>Medium</button>
                <button className='hard-btn' onClick={handleHardButtonClick}>Hard</button>
                <p>Choose The Level To Play The Game</p>
            </div>
      </div>
    </div>
  );
};

export default BackgroundVideo;
