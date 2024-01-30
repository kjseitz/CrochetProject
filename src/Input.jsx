import  {useState} from 'react';

function Input ({holder}) {
//set useState for value that will be a user input text
const [userInput, setUserInput] = useState();

const handleChange = (event) =>{
    setUserInput(event.target.value);
};

return (
    //input field with the holder displayed
    <input type="text" id="roundsNum" placeholder = {holder}>{userInput}</input>
)
}

export default Input