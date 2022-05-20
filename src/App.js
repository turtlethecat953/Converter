import './App.css';
import React,{useState}from 'react';
import IntergetRow from './Integer_row'
import RomanRow from './Roman_row';
import IntToRoman from './IntToRoman';
import RomanToInt from './RomanToInt';

function App() {
  const [int_in,setInteger] = useState(1)
  const [roman,setRoman] = useState('I')
  const [input_flag,setFlag] = useState(true)
  const [Msg,setError] = useState("ABCD")

  let int_amount, roman_amount
  if (input_flag){
    int_amount = int_in
    roman_amount = IntToRoman(int_amount)

  }else{
    roman_amount = roman
    int_amount = RomanToInt(roman_amount)
  }

  function handleInt(e){
    var input = parseFloat(e.target.value)
    console.log(input)
    if (Number.isInteger(input)){
      setError("")
    }else{
      setError("Input Must be Integer")
    }
    setInteger(e.target.value)
    setFlag(true)
  }

  function handleRoman(e){
    setFlag(false)
    setRoman(e.target.value)
  }

  return (
    <div>
      <h1>Covert</h1>
      <IntergetRow 
        onChangeAmout = {handleInt}
        amount={int_amount}/>
      <div className='errormsg'>{Msg}</div>
      <h1 className='equals'>=</h1>
      <RomanRow 
        onChangeAmout = {handleRoman}
        amount={roman_amount}/>
    </div>
  );
}

export default App;
