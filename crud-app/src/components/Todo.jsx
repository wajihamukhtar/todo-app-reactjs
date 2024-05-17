import React, { useState } from 'react'
import img from '../image/Todo-img.png'
import { v4 as uuidv4 } from 'uuid';


const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [obj, setObj] = useState({
        id: uuidv4(),
        item: ''
    });
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);

    function handleChange(e) {
        setObj({
            ...obj,
            [e.target.name]: e.target.value
        });
    }

    function handleAdd() {
        if (obj.item !== '') {
            if (isEditing && editId !== null) {
                const updatedTodos = todos.map(todo => {
                    if (todo.id === editId) {
                        return {
                            ...todo,
                            item: obj.item
                        };
                    }
                    return todo;
                });
                setTodos(updatedTodos);
                setIsEditing(false);
                setEditId(null);
            } else {
                setTodos([
                    ...todos,
                    obj
                ]);
            }
            setObj({
                id: uuidv4(),
                item: ''
            });
        } else {
            alert('Enter Todos.')
        }
    }

    const DeleteAllItems = () => {
        setTodos([])
    }

    function handleEdit(id, item) {
        if (!isEditing) {
            setObj({
                id: id,
                item: item
            });
            setIsEditing(true);
            setEditId(id);
        } else {
            const updatedTodos = todos.map(todo => {
                if (todo.id === editId) {
                    return {
                        ...todo,
                        item: obj.item
                    };
                }
                return todo;
            });
            setObj({
                item: ''
            });
            setTodos(updatedTodos);
            setIsEditing(false);
            setEditId(null);
        }
    }

    function handleDel(id) {
        const DeleteTodos = todos?.filter(todo => todo.id !== id);
        setTodos(DeleteTodos);
        setObj({
            item: ''
        });
        setIsEditing(false);
        setEditId(null);
    }

    return (
        <>
            <div className="h-100 mt-16 w-full flex justify-center font-sans">
                <div className="rounded shadow-lg shadow-lime-800  p-6 m-4 w-full sm:w-3/4 sm:max-w-full md:w-3/4 md:max-w-lg lg:w-3/4 lg:max-w-lg">
                    <div className="mb-5">
                        <h1 className="text-center text-2xl font-bold text-grey-darkest">To-do List</h1>
                        <div className="flex mt-4">
                            <input onChange={handleChange} value={obj.item} name='item' type='text' className="shadow appearance-none border rounded w-full py-1 px-3 mr-4" placeholder="Add Todo"></input>
                            <button onClick={handleAdd} className="text-md  w-16 ml-1 flex-no-shrink  border-0 px-1 rounded text-white bg-[#5e835a]">Add</button>
                            <button onClick={DeleteAllItems} className="text-md w-24 ml-1 flex-no-shrink px-1 border-0 rounded text-white bg-[#5e835a]">DeleteAll</button>
                        </div>
                    </div>
                    <div>
                        <div className=''>
                            {todos?.map(todo => (
                                <ul className='w-full flex my-2 justify-between lg:px-5 md:px-5' key={todo?.id}>
                                    <li className="w-full text-xl text-grey-darkest">{todo?.item}</li>
                                    <div className='w-full flex justify-end'>
                                        <button onClick={() => handleDel(todo?.id)} className="text-sm px-1 mr-1 border-0 rounded text-white bg-[#5e835a]">Delete</button>
                                        <button onClick={() => handleEdit(todo?.id, todo?.item)} className="text-sm mr-1 px-1 border-0 rounded text-white bg-[#5e835a]">{isEditing && editId === todo.id ? 'Save' : 'Edit'}</button>
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
