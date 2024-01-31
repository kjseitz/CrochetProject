import  {useState} from 'react';

function Input ({holder, id, type}) {
//set useState for value that will be a user input text
const [userInput, setUserInput] = useState();

const handleChange = (event) =>{
    setUserInput(event.target.value);
};

return (
    //input field with the holder displayed
    <input type={type} id={id} placeholder = {holder}>{userInput}</input>
)
}

export default Input