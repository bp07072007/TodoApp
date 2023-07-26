import React, { useState } from 'react'

const TaskItem = ({ tasks, setTasks }) => {
  const [taskStatus, setTaskStatus] = useState([])
  const handleDelete = (val) => {
    setTasks(tasks.filter((ele) => ele !== val))
    //console.log(tasks);
  }

  const handleStatus = (event, id) => {
    if (event.currentTarget.checked) {
      setTaskStatus([...taskStatus, id]);
    } else {
      setTaskStatus(taskStatus.filter(x => x !== id));
    }
  }
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-2 gap-2">
        <div>Total Task : {tasks.length}</div>
        <div>Completed Task :{taskStatus.length}</div>
      </div>
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead
                className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                <tr>
                  <th scope="col" className="px-6 py-4">#</th>
                  <th scope="col" className="px-6 py-4">Item Name</th>
                  <th scope="col" className="px-6 py-4">Status</th>
                  <th scope="col" className="px-6 py-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {tasks.reverse().map((task, index) =>
                  <tr
                    className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700" key={index}>
                    <td className="whitespace-nowrap px-6 py-4 font-medium">{index + 1}</td>
                    <td className="whitespace-nowrap px-6 py-4">{task}</td>
                    <td className="whitespace-nowrap px-6 py-4"><input type='checkbox' onClick={(e) => handleStatus(e, index)} />{taskStatus.includes(index) ? 'Completed' : ''}</td>
                    <td className="whitespace-nowrap px-6 py-4">

                      <input type='button' value='Delete' className='bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={() => handleDelete(task)} />
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskItem