import React, { useState } from 'react';
import './Counter.css'

function Counter({ name }) {
  const [count, setCount] = useState(0);
  const [pieceName, setPieceName] = useState('Piece Name');

  const incrementCount = () => {
    setCount(count + 1);
    setShowDecreaseButton(true);
  };

  const updatePieceName = () => {
    const userInput = prompt('Please enter the piece name:', pieceName);
    if (userInput !== null) {
      setPieceName(userInput);
    }
  };

  const getNumOfRounds = () => {
    const numOfRoundsHolder = document.querySelector("#num-of-rounds-holder");
    const maxRounds = parseInt(numOfRoundsHolder.value);
  }

  const decreaseCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <div className="counter-header">
        <h1>{pieceName}</h1>
        <button onClick={updatePieceName}><img src="edit.webp"/></button>
      </div>
      <h2>
        {name}: {count}
      </h2>
      <button onClick={incrementCount}><img src="plus.png"/></button>
      {count != 0 ?
        <button onClick={decreaseCount}><img src="minus.png"/></button>
        : <button><img src="minus.png"/></button>
      }
      
    </div>
  );
}

export default Counter;