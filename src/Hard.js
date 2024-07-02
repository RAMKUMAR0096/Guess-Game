import React from 'react'
import myImage from './image/rk_img.png';
import myVideo from './video/aero.mp4';
import { useState } from 'react'
import { useEffect, useRef } from 'react';
import { Result } from './Result'
import { useNavigate } from 'react-router-dom';
import useBlockBackNavigation from './useBlockBackNavigation';
const secretNum = Math.floor(Math.random() * 30) + 1;

export const Hard = () => {
    const videoRef = useRef(null);
    const navigate = useNavigate();
    // useBlockBackNavigation();

    useBlockBackNavigation();
    const [term, setTerm] = useState("")
    function handleChange(e) {
        setTerm(e.target.value)
    }
    // const navigate = useNavigate();
    const handleEasyButtonClick = () => {
        navigate('/easy');
    };
    const handleMediumButtonClick = () => {
        navigate('/medium');
    };
    const showAlert = () => {
        alert('You are in Hard Level!');
    };
    //useeffect  
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
        <>
            <div className='video-container'>
                <video ref={videoRef} loop className="video-background">
                    <source src={myVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="content">
                    <div className='img'>
                        <img src={myImage} alt="Description of the image" />
                    </div>
                    <div className="container">
                        <div className='head'>
                            <label htmlFor='term'>Guess the number between 1 to 30 (answeer:{secretNum})</label>
                        </div>

                        <input type='text' id='term' placeholder='              Enter the number      ' name='term' onChange={handleChange} />
                        <Result secretNum={secretNum} term={term} />
                        <h2 className='cus-lev'>Choose your Level 😎</h2>
                        <button className='easy-btn' onClick={handleEasyButtonClick}>Easy</button>
                        <button className='medium-btn' onClick={handleMediumButtonClick}>Medium</button>
                        <button className='hard-btn' onClick={showAlert}>Hard</button>

                    </div>
                </div>
            </div>

        </>

    );

}
