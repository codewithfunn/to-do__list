import React from 'react'
import { useState } from 'react'; 
import ToDoItems from './ToDoItems';
import InputArea from './InputArea';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ToDo = () => {
  
  const [inputTextIsEmpty, setInputTextIsEmpty] = useState(false)
  const notify = () => {
    if(inputTextIsEmpty){
      console.log(inputTextIsEmpty)
      toast.error('Text is empty, Fail!', {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
    else if(!inputTextIsEmpty){
      console.log(inputTextIsEmpty)
      toast.success('Text insert Success!', {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
  };

 



  const [items, setItems] = useState([])
 

  const addItem = (inputText)=>{
    if(inputText==''){
      console.log('empty')
      setInputTextIsEmpty(true)
    }
    else{
      setItems(prevItems =>{
        return [...prevItems, inputText];
      })
      setInputTextIsEmpty(false)
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
  //delete tostify
  const deleteTostify=()=>{
    toast.warn('item delete, Success!', {
      position: "top-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });      
  }
  return (
    <div style={{minHeight:'500px' , minWidth:'250px' , maxWidth:'500px' }}  className="h-fit min-h-max w-1/4 my-4 rounded-2xl shadow-xl bg-slate-50 mx-auto text-center flex flex-col   align-middle bg-[url('../public/food.png')]">
        <div className="mt-5 h-4/5 flex flex-col justify-center">
         {/* toastfy */}
       <ToastContainer
          position="top-left"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />
            <div className="flex w-64 mx-auto text-center py-2 ">
            <h1 className='font-bold font-serif text-2xl bg-Orange-custom-medium hover:border-2 cursor-pointer hover:border-Orange-custom-medium rounded-tl-3xl rounded-tr-lg rounded-bl-lg rounded-br-3xl py-1 px-4   flex mx-auto '>To-Do List</h1>
            </div>
          <InputArea
          onAdd ={addItem}
          tostify = {notify}
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
                  deleteTost = {deleteTostify}
                />
               })} 
            </ul>
        </div>
    </div>
  )
}

export default ToDo