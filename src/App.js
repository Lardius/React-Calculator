import React, { useState} from 'react';
import './App.css';

function App() {

  const [result, setResult] = useState("")
  const [operantion, setOperantion] = useState("")
  const [text, setText] = useState("")
  const [arr, setArr] = useState([]);




  const targetNumber = (e) => {
    if(text.includes('.') && e.target.id === "."){return}
    setText(text + e.target.id)
    setResult(result + e.target.id)
  }



  const targetOperation = (e) => {
    if((operantion && e.target.id === "operand") || !result) {return}
    if(text) {arr.push(text)}
    setText("")
    setOperantion(e.target.name)
    setResult(result + e.target.name )
  }


  const clearResult = () => {
    setResult("")
    setOperantion("")
    setArr([])
  }

  const backspace = () => {
    if(operantion) {
      setResult(result.slice(0, result.length !== result.indexOf(operantion) + 1 ?  result.length-1 : result.indexOf(operantion) + 1))
    } else {
      setResult(result.slice(0, result.length-1))
    }
  }


  const outputOfTheResult = () => {
    if(text) {arr.push(text)}
    if(arr.length < 2) {return}

    setText("")
    setResult(countingTheResults)

    setArr([])

  }

  const countingTheResults = () => {
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
