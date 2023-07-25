import React, { useState } from 'react'

const AddTodo = ({ tasks, setTasks }) => {
  const [boxValue, setBoxValue] = useState('');

  const boxChange = (event) => {
    event.preventDefault();
    setBoxValue(event.target.value)
  }

  const addTodo = () => {
    setTasks([...tasks, boxValue])
  }
  return (
    <div>
      <input type='text' value={boxValue} onChange={(event) => boxChange(event)} />
      <input type='button' value="Add Task" onClick={addTodo} />
    </div>
  )
}

export default AddTodo