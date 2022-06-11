import React from 'react'
import { useState } from 'react'; 
import ToDoItems from './ToDoItems';
import InputArea from './InputArea';


const ToDo = () => {
  const input_empty = -1;

  const [items, setItems] = useState([])
 

  const addItem = (inputText)=>{
    if(inputText==''){
       input_empty = 1;
       console.log('empty')
    }
    else{
      setItems(prevItems =>{
        return [...prevItems, inputText];
      })
    }
  
    console.log(items)
  }

  // delete item
  const deleteItem = (id)=>{
    setItems((prevValue)=>{
      return prevValue.filter((item ,index)=>{
        return index !==id; // it will return the array other than elememt which has this id 
      })
    })
  }
  return (
    <div style={{minHeight:'500px' , minWidth:'250px' , maxWidth:'500px' }}  className="h-fit min-h-max w-1/4 my-4 rounded-2xl shadow-xl bg-slate-50 mx-auto text-center flex flex-col   align-middle bg-[url('../public/food.png')]">
        <div className="mt-5 h-4/5 flex flex-col justify-center">
            <div className="flex w-64 mx-auto text-center py-2 ">
            <h1 className='font-bold font-serif text-2xl bg-Orange-custom-medium hover:border-2 cursor-pointer hover:border-Orange-custom-medium rounded-tl-3xl rounded-tr-lg rounded-bl-lg rounded-br-3xl py-1 px-4   flex mx-auto '>To-Do List</h1>
            </div>
          <InputArea
          onAdd ={addItem}
          />
        </div>
        <div className="my-7  ">
            <ul className='list-disc mx-3 ml-10'>
               {items.map((todoItem , index) =>{
                return <ToDoItems
                  key ={index}
                  id ={index}
                  text = {todoItem}  // sending as a props to the ToDoItems Componenent
                  onChecked = {deleteItem} 
                />
               })} 
            </ul>
        </div>
    </div>
  )
}

export default ToDo