import './App.css';
import { useState } from 'react';
import History from './History';

const doubleOperators = ['+','-','/','*','.']
const databseURL = "http://localhost:3500/history"

function App() {
  const [input,setInput] = useState('')

  const addHistoryRecord = async (newRecord) => {
    try {
      const response = await fetch(databseURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newRecord)
      });
      if (response.ok) {
        console.log('Ok');
      } else {
        console.error('Failed');
      }
    } catch (error) {
      console.error(error);
    }
  };

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

      const newHistoryRecord = {value:`${inputString}=${result}`}
      addHistoryRecord(newHistoryRecord);
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
                <td onClick={()=>{calculationFunction(input);addHistoryRecord(input)}}>=</td>
                <td onClick={()=>{doubleOperatorCheck('/')}}>/</td>
              </tr>
              </tbody>
            </table>
          </div>
          <div id='history-container'>
            <h1>History</h1>
              <div id='history-content'>
                <History addHistoryRecord={addHistoryRecord}/>
              </div>
          </div> 
        </div>
    </>
  );
}

export default App;
