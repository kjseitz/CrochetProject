import  {useState} from 'react';

function Input ({holder}) {
//set useState for value that will be a user input text
const [userInput, setUserInput] = useState();

return (
    //input field with the holder displayed
    <input type="text" id="roundsNum" placeholder = {holder}>{userInput}</input>
)
}

export default Input