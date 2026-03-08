import { useState } from 'react'
import './App.css'

function App() {
  const [firstNumber, setFirstNumber] = useState<number>(0);
  const [secondNumber, setSecondNumber] = useState<number>(0);
  const [result, setResult] = useState<number>(0);
  const [operation, setOperation] = useState<string>('add');

  return (
    <div className='calculator-container'>
      <p className='calculator-title'>React Calculator</p>
      <input
        className='calculator-input'
        type='number'
        value={firstNumber}
        required
        placeholder='Enter first number'
        onChange={(e) => { setFirstNumber(Number(e.target.value)) }}
      />

      <input
        className='calculator-input'
        type='number'
        value={secondNumber}
        required
        placeholder='Enter second number'
        onChange={(e) => { setSecondNumber(Number(e.target.value)) }}
      />

      <select 
        className='calculator-select'
        id='select-operation'
        value={operation}
        onChange={(e) => setOperation(e.target.value)}
      >
        <option value='add'>Add</option>
        <option value='subtract'>Subtract</option>
        <option value='multiply'>Multiply</option>
        <option value='divide'>Divide</option>
      </select>

      <button className='calculator-button' onClick={() => {
        switch(operation) {
          case 'add':
            setResult(firstNumber + secondNumber);
            break;
          case 'subtract':
            setResult(firstNumber - secondNumber);
            break;
          case 'multiply':
            setResult(firstNumber * secondNumber);
            break;
          case 'divide':
            setResult(secondNumber !== 0 ? firstNumber / secondNumber : 0);
            break;
        }
      }}>Calculate</button>

      {result != 0 &&
        <div className='calculator-result'>Result: {result}</div>
      }
    </div>
  )
}

export default App
