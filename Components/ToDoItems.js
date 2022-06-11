import React from 'react'
import {AiFillDelete} from 'react-icons/ai';
import { useState } from 'react';
const ToDoItems = (props) => {
    const [isDone , setIsDone] = useState(false)
    const handleClick =()=>{
        setIsDone((prevValue)=>{
            return !prevValue; //if the prevValue is true it will turn it into false and vice versa
        })
    }
  return (
    <div onClick={handleClick} >
        <li style={{textDecoration: isDone?"line-through":"none"}} className={'text-left my-3 cursor-pointer py-2 ml-4'}>{props.text} <AiFillDelete className='my-auto float-right active:text-Orange-custom-medium cursor-pointer'/></li>

    </div>
  )
}

export default ToDoItems 