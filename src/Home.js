import React from 'react';
import myImage from './image/rk_img.png'; 
import { useNavigate } from 'react-router-dom';
import useBlockBackNavigation from './useBlockBackNavigation';
import BackgroundVideo from './BackgroundVideo';

const Home = () => {
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

    return (
        <>
            <BackgroundVideo/>
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
        </>
    );
};

export default Home;
