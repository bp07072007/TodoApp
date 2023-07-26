import React, { useState } from 'react'
import AddTodo from './AddTodo'
import TaskItem from './TaskItem'

const TodoApp = () => {
  const [tasks, setTasks] = useState([])
  return (
    <div className=' w-1/3'>
      <AddTodo tasks={tasks} setTasks={setTasks} />
      <TaskItem tasks={tasks} setTasks={setTasks} />
    </div>
  )
}

export default TodoApp