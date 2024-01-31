import Input from "./Input"

//get the value from the input with holder="# of rounds"
const getNumOfRounds = () => {
    const numOfRoundsHolder = document.querySelector("#num-of-rounds-holder");
    return parseInt(numOfRoundsHolder.value);
}

function Container() {
return (
    <div className="container">
        <Input holder="# of rounds" id="roundsNum" type="number" onChange={getNumOfRounds}/><br />
        <Input holder="# of stitches" id="numOfStitches" type="number"/><br />
        <Input holder="Hook Size" id="hookSize" type="number"/><br />
        <Input holder="Yarn Color(s)" type="text"/>
    </div>
)
}

export default Container