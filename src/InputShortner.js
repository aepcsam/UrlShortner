import React, {useState} from 'react'

const InputShortner = ({setInputValue}) => {
  const [value, setValue] = useState("");

  const handleClick = ()=>{
    setInputValue(value);
    setValue("");

  }

  return (
    <div className='inputContainer'>
        <h1>URL <span>Shortner</span></h1>
        <div>
        <input
          type="text"
          placeholder='Past ur LongUrl ...'
          value={value}
          onChange ={e=>setValue(e.target.value)}/>
          
        <button onClick={handleClick}>shorten</button>
        </div>    
    </div>
  )
}

export default InputShortner