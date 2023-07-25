import { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {

  const [tasks, setTasks] = useState([])
  return (
    <div className="App">
      <AddTodo tasks={tasks} setTasks={setTasks} />
      <TodoList tasks={tasks} />
    </div >
  );
}

export default App;
