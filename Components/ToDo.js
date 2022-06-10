import React from 'react'
import {AiFillDelete} from 'react-icons/ai';
import {BiCommentAdd} from 'react-icons/bi';
const ToDo = () => {
  return (
    <div style={{minHeight:'500px' , minWidth:'250px' , maxWidth:'500px' }}  className="h-fit min-h-max w-1/4 my-4 rounded-2xl shadow-xl bg-slate-50 mx-auto text-center flex flex-col   align-middle bg-[url('../public/food.png')]">
        <div className="mt-5 h-4/5 flex flex-col justify-center">
            <div className="flex w-64 mx-auto text-center py-2 ">
            <h1 className='font-bold font-serif text-2xl bg-Orange-custom-medium hover:border-2 cursor-pointer hover:border-Orange-custom-medium rounded-tl-3xl rounded-tr-lg rounded-bl-lg rounded-br-3xl py-1 px-4   flex mx-auto '>To-Do List</h1>
            </div>
            <div className="flex flex-row justify-center my-5">
            <input type="text"  className='bg-transparent border-b-2 border-dashed '/>
            <button className='flex flex-row mx-2 border-b-2 active:border-2 active:rounded-md border-Orange-custom-medium'> <BiCommentAdd className='flex  my-auto mx-2 hover:text-Orange-custom-medium' />Add</button>
            </div>
        </div>
        <div className="my-7  ">
            <ul className='list-disc mx-3 ml-10'>
                <li className='text-left my-3 py-2 ml-4'>jaspreet<AiFillDelete className='my-auto float-right active:text-Orange-custom-medium cursor-pointer'/></li>
            </ul>
        </div>
    </div>
  )
}

export default ToDo