import React, { useState } from 'react';

function Counter({ name }) {
  const [count, setCount] = useState(0);
  const [pieceName, setPieceName] = useState('Piece Name');

  const incrementCount = () => {
    setCount(count + 1);
  };

  const updatePieceName = () => {
    const userInput = prompt('Please enter the piece name:', pieceName);
    if (userInput !== null) {
      setPieceName(userInput);
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
      <button onClick={updatePieceName}>Update Piece Name</button>
    </div>
  );
}

export default Counter;
