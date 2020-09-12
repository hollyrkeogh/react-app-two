import React, { useState } from "react";
import TodoItem from "./components/TodoItem/TodoItem";
import TodoForm from "./components/TodoForm/TodoForm";
import "./App.css";


function App() {
  //variables 
  const [todos, setTodos] = useState([
    {text: "Learn React", isCompleted: false},
    {text: "Feed Dog", isCompleted: false},
    {text: "Water Grass", isCompleted: false},
    {text: "Drink Water", isCompleted: false },
  ])

  //methods 
  const addTodo = (text) => {
    const newTodos = [...todos, { text }]
    setTodos(newTodos)
  }

  const completeTodo = (index) => {
    const newTodos = [...todos]
    newTodos[index].isCompleted = true
    setTodos(newTodos)
  }

  //template
  return (
  <div className="app">
    <div className="todo-list">
      <h1>My To Do list</h1>
        {todos.map((todo, index) => (
        <TodoItem 
          todo={todo} 
          key={index} 
          index={index} 
          completeTodo={completeTodo}
        />
      ))}
      <TodoForm addTodo={addTodo} />
    </div>
  </div>
  )
}
export default App