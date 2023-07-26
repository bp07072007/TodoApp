import React, { useState } from 'react'

const AddTodo = ({ tasks, setTasks }) => {
  const [boxValue, setBoxValue] = useState('');

  const boxChange = (event) => {
    event.preventDefault();
    setBoxValue(event.target.value)
  }
  const addTodo = () => {
    setTasks([...tasks, boxValue]);
    setBoxValue('');
  }
  return (
    <div>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <input type='text' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter item name" value={boxValue} onChange={(event) => boxChange(event)} />
        <input type='button' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' value="Add Task" onClick={addTodo} />
      </div>
    </div>
  )
}

export default AddTodo