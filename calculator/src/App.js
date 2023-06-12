import './App.css';
import { useState } from 'react';



function App() {
  const [input,setInput] = useState('')
  const [calcHistory,setCalcHistory] = useState('')

  const doubleOperatorCheck = (character) => {
    const doubleOperators = ['+','-','/','*','.']
    const lastInputCharacter = input.split('').pop()
    console.log(lastInputCharacter)
    const checkCondition = doubleOperators.includes(lastInputCharacter) && doubleOperators.includes(character)
    if(!checkCondition){
      setInput(input+character)
    }
}

  const calculationFunction = (inputString) => {
    const doubleOperators = ['+','-','/','*','.']
    const lastInputCharacter = input?.split('').pop()
    const checkCondition = doubleOperators.includes(lastInputCharacter)
    if(!checkCondition){
      let result = Function(`return ${inputString}`)()
      setCalcHistory(`<p>${input} = ${result}</p>`)
      setInput(`${result}`)
    }
  }

  const addHistoryRecord = (i) => {
    
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
              <td onClick={()=>{calculationFunction(input);addHistoryRecord(input)}}>=</td>
              <td onClick={()=>{doubleOperatorCheck('/')}}>/</td>
            </tr>
            </tbody>
          </table>
        </div>
        <div id='history-container'>
          <h1>History</h1>
            <div id='history-content'>
             {calcHistory}
            </div>
        </div> 
      </div>
    </>
  );
}

export default App;
