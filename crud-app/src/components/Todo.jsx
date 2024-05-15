import React, { useState } from 'react'
import img from '../image/Todo-img.png'
const Todo = () => {
    const [Inputvalue, setInputValue] = useState('');
    const [Items, setItems] = useState([])

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }
    const addItems = () => {
        if (!Inputvalue) {
        }
        else {
            setItems([...Items, Inputvalue])
            setInputValue('')
        }
    }
    const DeleteAllItems = () => {
        setItems([])
    }
    const DeleteItem = (index) => {
        const updateditem = Items.filter((item, i) => i !== index)
        setItems(updateditem)
    }
    const EditItem = () => {

    }

    return (
        <>
    <div className="h-100 mt-16 w-full flex justify-center font-sans">
    <div className="main rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg md:w-3/4 md:max-w-lg sm:w-3/4 sm:max-w-auto">
        <div className="mb-5">
            <h1 className="text-center text-xl font-bold text-grey-darkest">To-do List</h1>
            <div className="flex mt-4">
                <input onChange={handleChange} value={Inputvalue} name='todo' className="shadow appearance-none border rounded w-full py-2 px-3 mr-4" placeholder="Add Todo"></input>
                <button onClick={addItems} className="text-md w-24 ml-1 flex-no-shrink px-2 border-2 rounded">Add</button>
                <button onClick={DeleteAllItems} className="text-md w-24 ml-1 flex-no-shrink px-2 border-2 rounded">DeleteAll</button>
            </div>
        </div>
        <div>
            <div>
                {Items.map((items, index) => (
                <ul className='flex my-3 mx-5 '>
                    <li className="w-full text-xl text-grey-darkest">{items}</li>
                    <div className='w-full flex justify-end'>
                        <button onClick={() => DeleteItem(index)} className="text-sm px-2 ml-4 mr-1 border-2 rounded ">Delete</button>
                        <button onClick={() => EditItem(items)} className="text-sm px-2 border-2 rounded">Edit</button>
                    </div>
                </ul>
                ))}
                <img src={img} alt="" />
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default Todo
