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
  const [Intflag,setIntFlag] = useState(true)
  const [romanflag,setRomFlag] = useState(true)
  const [IntMsg,setIntError] = useState("")
  const [RomMsg,setRomError] = useState("")
  const validRoman = new RegExp('^M{0,3}(CM|CD|D?C{0,3})?(XC|XL|L?X{0,3})?(IX|IV|V?I{0,3})?$')

  let int_amount, roman_amount
  if (input_flag){
    int_amount = int_in
    if (Intflag){
      roman_amount = IntToRoman(int_amount)
    }

  }else{
    roman_amount = roman
    if (romanflag){
      int_amount = RomanToInt(roman_amount)
    }
  }
    

  function handleInt(e){
    var input = parseFloat(e.target.value)
    if (!Number.isInteger(input)){
      setIntError("Input Must be Integer")
      setIntFlag(false)
    }else if (input>3999){
      setIntError("The greatest number that can be converted to Roman numerals is 3999") 
      setIntFlag(false)
    }else{
      setIntError("")
      setIntFlag(true)
    }
    setInteger(e.target.value)
    setFlag(true)
  }

  function handleRoman(e){
    if (validRoman.test(e.target.value)){
      setRomError("")
      setRomFlag(true)
    }else{
      setRomError("The Input is not valid")
      setRomFlag(false)
    }
    setFlag(false)
    setRoman(e.target.value)
  }

  return (
    <div>
      <h1>Covert</h1>
      <IntergetRow 
        onChangeAmout = {handleInt}
        amount={int_amount}/>
      <div className='errormsg'>{IntMsg}</div>
      <h1 className='equals'>=</h1>
      <RomanRow 
        onChangeAmout = {handleRoman}
        amount={roman_amount}/>
      <div className='errormsg'>{RomMsg}</div>
    </div>
  );
}

export default App;
