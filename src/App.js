import React,{useState} from 'react';
import InputShortner from './InputShortner';
import './App.css';
import Background from './Background';
import LinkResult from './LinkResult';

const App = () => {
  const [inputValue, setInputValue] = useState("")

  return (
  
    <div className='container'>
      <Background />
      <InputShortner setInputValue={setInputValue}/>
      <LinkResult inputValue={inputValue} />
    </div>

  )
}

export default App