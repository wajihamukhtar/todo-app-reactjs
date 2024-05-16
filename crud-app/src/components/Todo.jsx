import React, { useState } from 'react'
import img from '../image/Todo-img.png'
import { v4 as uuidv4 } from 'uuid';
const Todo = () => {

const [todos, setTodos] = useState([]);
const [obj, setObj] = useState({
    id: uuidv4(),
    item: ''
  });

  function handleChange(e) {
    setObj({
      ...obj,
      [e.target.name]: e.target.value
    });
  }

  function handleAdd() {
if (obj.item !== '') {
    setTodos([
      ...todos,
      obj
    ]);
    setObj({
      id: uuidv4(),
      item: ''
    });
}
else{
}
  }

  const DeleteAllItems = () => {
    setTodos([])
 }

  function handleDel(id) {
    const DeleteTodos = todos?.filter(todo => todo.id !== id);
    setTodos(DeleteTodos);
    setObj({
        item:''
    })
  }

  function handleEdit(item) {
    setObj(
      {
        ...obj,
        item: item
      }
    )
  }

  function handleSave(item, id) {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo,
          item: obj.item 
        };
        }
        return todo;
      });
        setObj({
          item: ''
        });
      setTodos(updatedTodos);
  }

    return (
        <>
    <div className="h-100 mt-16 w-full flex justify-center font-sans">
    <div className="main rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg md:w-3/4 md:max-w-lg sm:w-3/4 sm:max-w-auto">
        <div className="mb-5">
            <h1 className="text-center text-xl font-bold text-grey-darkest">To-do List</h1>
            <div className="flex mt-4">
                <input onChange={handleChange} value={obj.item} name='item' type='text' className="shadow appearance-none border rounded w-full py-2 px-3 mr-4" placeholder="Add Todo"></input>
                <button onClick={handleAdd} className="text-md w-24 ml-1 flex-no-shrink border-2 rounded">Add</button>
                <button onClick={DeleteAllItems} className="text-md w-24 ml-1 flex-no-shrink px-1 border-2 rounded">DeleteAll</button>
            </div>
        </div>
        <div>
            <div>
                {todos?.map(todo => (
                <ul className='flex my-3 mx-5 '>
                    <li className="w-full text-xl text-grey-darkest" key={todo?.id}>{todo?.item}</li>
                    <div className='w-full flex justify-end'>
                        <button onClick={() => handleDel(todo?.id)} className="text-sm px-2 mr-1 border-2 rounded ">Delete</button>
                        <button onClick={() => handleEdit(todo?.item,todo?.id)} className="text-sm mr-1 px-2 border-2 rounded">Edit</button>
                        <button onClick={() => handleSave(todo?.item,todo?.id)} className="text-sm  px-2 border-2 rounded">Save</button>
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
