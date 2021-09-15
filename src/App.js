import React, {useState} from 'react';
import './App.css';

function App() {

  const [result, setResult] = useState("")
  const [operantion, setOperantion] = useState("")



  const targetNumber = (e) => {
    if(!result && e.target.id === ".") {return}

    setResult(result + e.target.id)
  }

  const targetOperation = (e) => {
    if(!result) {return}

    if(operantion) {
      setResult(countingTheResults() + e.target.name)
      setOperantion(e.target.name)
    } else {setResult(result + e.target.name)
      setOperantion(e.target.name)}
  }

  const clearResult = () => {
    setResult("")
    setOperantion("")
  }

  const backspace = () => {
    if(operantion) {
      setResult(result.slice(0, result.length !== result.indexOf(operantion) + 1 ?  result.length-1 : result.indexOf(operantion) + 1))
    } else {
      setResult(result.slice(0, result.length-1))
    }
  }

  const outputOfTheResult = () => {
        if(!result.split(operantion)[1]) {return}
        setResult(countingTheResults)
        setOperantion("")



  }

  const countingTheResults = () => {
    const arr = result.split(operantion)
    let results = 0
    switch (operantion) {
      case "-":
        results =  parseInt(arr[0]) - parseInt(arr[1]);
        break;
      case "/":
        results =  parseInt(arr[0]) / parseInt(arr[1]);
        break;
      case "*":
        results =  parseInt(arr[0]) * parseInt(arr[1]);
        break;
      case "+":
        results =  parseInt(arr[0]) + parseInt(arr[1]);
        break;
      default:
        console.log("Err")
    }
    console.log(results)
    return results.toString();
  }

  return (
    <div className="container">
      <form>
        <input type="text" placeholder={0} value={result}/>
      </form>
      <div className="keypad">
        <button onClick={clearResult} id="clear">
          Clear
        </button>
        <button onClick={backspace} id="backspace">
          C
        </button>
        <button name="/" onClick={targetOperation} id="operand">
          &divide;
        </button>
        <button onClick={targetNumber} id="7">
          7
        </button>
        <button onClick={targetNumber} id="8">
          8
        </button>
        <button onClick={targetNumber} id="9">
          9
        </button>
        <button name="*" onClick={targetOperation} id="operand">
          &times;
        </button>
        <button onClick={targetNumber} id="4">
          4
        </button>
        <button onClick={targetNumber} id="5">
          5
        </button>
        <button onClick={targetNumber} id="6">
          6
        </button>
        <button name="-" onClick={targetOperation} id="operand">
          &ndash;
        </button>
        <button onClick={targetNumber} id="1">
          1
        </button>
        <button onClick={targetNumber} id="2">
          2
        </button>
        <button onClick={targetNumber} id="3">
          3
        </button>
        <button name="+" onClick={targetOperation} id="operand">
          +
        </button>
        <button onClick={targetNumber} id="0">
          0
        </button>
        <button onClick={targetNumber} id=".">
          .
        </button>
        <button onClick={outputOfTheResult} id="result">
          =
        </button>
      </div>
    </div>
  );
}

export default App;
