import React, { useState } from 'react';
import Container from "./Container"

function Counter({ name }) {
  const [count, setCount] = useState(0);
  const [pieceName, setPieceName] = useState('Piece Name');
  const [showDecreaseButton, setShowDecreaseButton] = useState(false);

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
    if (count === 1) {
      setShowDecreaseButton(false);
    }
  };

  return (
    <div>
      <h1>{pieceName}</h1>
      <h3>
        {name}: {count}
      </h3>
      <button onClick={incrementCount}>Increment</button>
      <br />
      {showDecreaseButton && (
        <button onClick={decreaseCount}>Decrease</button>
      )}
      <br />
      <button onClick={updatePieceName}>Update Piece Name</button>
    </div>
  );
}

export default Counter;