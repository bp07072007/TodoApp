import React from 'react'

const TodoList = ({ tasks }) => {
  return (
    <div>
      {tasks.map(task => {
        return (

          <div>{task}</div>

        )
      })}
    </div>
  )
}

export default TodoList