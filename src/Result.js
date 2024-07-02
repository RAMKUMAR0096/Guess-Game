import React from 'react'
import './App.css';

export const Result = ({secretNum,term}) => {
    var result='  none';
    const refreshPage = () => {
        window.location.reload();
      };

  if(term){
    if(term>secretNum){
        result='  higher  Try Again!!!';
    }else if(term<secretNum){
        result='  lower   Try Again!!!';
    }else if(term==secretNum){
        // result=`congratulation the answer ${term}`
        result="  yippee correct!! You won the game 🎁 ";
    }else{
        result='  enter the valid input'
      }
  }
  return (<>
  <h3>You Guessed:{result}</h3>
  {term==secretNum?<button className='newgame-btn' onClick={refreshPage}>New game</button>:<div></div>}
  </>
    
  )
}
