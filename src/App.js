import React, { useState } from "react";
import TodoItem from "./components/TodoItem/TodoItem";
import TodoForm from "./components/TodoForm/TodoForm";
import "./App.css";


function App() {
  //variables 
  const [todos, setTodos] = useState([
    "Learn React",
    "Feed Dog",
    "Water Grass",
    "Drink Water"
  ])

  //methods 
  const addTodo = (text) => {
    const newTodos = [...todos, text]
    setTodos(newTodos)
  }

  //template
  return (
  <div className="app">
    <div className="todo-list">
      <h1>My To Do list</h1>
        {todos.map((todo, index) => (
        <TodoItem todo={todo} key={index} />
      ))}
      <TodoForm addTodo={addTodo} />
    </div>
  </div>
  )
}
export default App