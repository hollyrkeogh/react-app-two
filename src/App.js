import React, { useState } from "react";
import TodoItem from "./components/TodoItem";
import TodoForm from "./components/TodoForm";

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
  <div>
    <h1>My To Do list</h1>
    {todos.map((todo, index) => (
      <TodoItem todo={todo} key={index} />
    ))}
    <TodoForm addTodo={addTodo} />
  </div>
  )
}
export default App