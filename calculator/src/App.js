import './App.css';
import { useState } from 'react';

const doubleOperators = ['+','-','/','*','.']

function App() {
  const [input,setInput] = useState('')

  const doubleOperatorCheck = (character) => {
    const inputCopy = input.slice("")
    const lastInputCharacter = inputCopy.split('').pop()
    const checkCondition = doubleOperators.includes(lastInputCharacter) && doubleOperators.includes(character)
    if(!checkCondition){
      setInput(input+character)
    }
    return (input+character)
  }

  const calculationFunction = (inputString) => {
    const lastInputCharacter = input?.split('').pop()
    const checkCondition = doubleOperators.includes(lastInputCharacter)
    if(!checkCondition){
      let result = Function(`return ${inputString}`)()
      setInput(`${result}`);
    }
  }

  return (
    <>
      <div id='container'>
          <div id='table'>
            <table id='calculator'>
              <tbody>
              <tr>
                <td colSpan='3' id='calc-result'>{input}</td>
                <td onClick={()=>{setInput('')}}id='calc-clear'>c</td>
              </tr>
              <tr>
                <td onClick={()=>{doubleOperatorCheck(1)}}>1</td>
                <td onClick={()=>{doubleOperatorCheck(2)}}>2</td>
                <td onClick={()=>{doubleOperatorCheck(3)}}>3</td>
                <td onClick={()=>{doubleOperatorCheck('+')}}>+</td>
              </tr>
              <tr>
                <td onClick={()=>{doubleOperatorCheck(4)}}>4</td>
                <td onClick={()=>{doubleOperatorCheck(5)}}>5</td>
                <td onClick={()=>{doubleOperatorCheck(6)}}>6</td>
                <td onClick={()=>{doubleOperatorCheck('-')}}>-</td>
              </tr>
              <tr>
                <td onClick={()=>{doubleOperatorCheck(7)}}>7</td>
                <td onClick={()=>{doubleOperatorCheck(8)}}>8</td>
                <td onClick={()=>{doubleOperatorCheck(9)}}>9</td>
                <td onClick={()=>{doubleOperatorCheck('*')}}>*</td>
              </tr>
              <tr>
                <td onClick={()=>{doubleOperatorCheck(0)}}>0</td>
                <td onClick={()=>{doubleOperatorCheck('.')}}>.</td>
                <td onClick={()=>{calculationFunction(input)}}>=</td>
                <td onClick={()=>{doubleOperatorCheck('/')}}>/</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
    </>
  );
}

export default App;
