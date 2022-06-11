import React from 'react'
import { useState } from 'react'
import {BiCommentAdd} from 'react-icons/bi';

const InputArea = (props) => {
    const [inputText, setInputText] = useState("")
    const handleChange =(event)=>{
        const newValue = event.target.value;
        setInputText(newValue)
        console.log(newValue);
      }
  return (
    <div className="flex flex-row justify-center my-5">
    <input type="text" value={inputText} name='inputText' onChange={handleChange} className='bg-transparent border-b-2 border-dashed '/>
    <button onClick={()=>{
        props.onAdd(inputText)
        setInputText('');    
        }}
         className='flex flex-row mx-2 border-b-2 active:border-2 active:rounded-md border-Orange-custom-medium'> <BiCommentAdd className='flex  my-auto mx-2 hover:text-Orange-custom-medium' />Add</button>
    </div>
  )
}

export default InputArea