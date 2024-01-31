import  {useState} from 'react';
import './Input.css'

function Input ({holder, id, type}) {
const [userInput, setUserInput] = useState();

const handleChange = (event) =>{
    setUserInput(event.target.value);
};

return (
    <input type={type} id={id} placeholder = {holder}>{userInput}</input>
)
}

export default Input