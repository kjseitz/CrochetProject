import { useState } from 'react'
import Input from "./Input"

function Container() {
    const [getNumRounds,  setNumRounds] = useState(1); 
    //get the input for the input with id="roundsNum"
    function handleSubmit(e) {
        e.preventDefault();
        let roundsNum = document.getElementById("roundsNum").value;
    }

return (
    <div className="container">
        <Input holder="# of rounds" id="roundsNum" type="number"/><br />
        <Input holder="# of stitches" id="numOfStitches" type="number"/><br />
        <Input holder="Hook Size" id="hookSize" type="number"/><br />
        <Input holder="Yarn Color(s)" type="text"/>
    </div>
)
}

export default Container