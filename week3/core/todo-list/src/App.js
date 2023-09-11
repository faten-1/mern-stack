import React, { useEffect, useState } from 'react';
import './App.css';
import Todo from './components/Todo';


function App() {
  const [newTodo, setNewTodo] = useState("")
  const [todos, setToDos] = useState([])

  const handleNewTodoSubmit = (event) => {
    if (newTodo.length === 0) {
      return;
    }
    event.preventDefault()

    const todoItem = {
      text: newTodo,
      complete: false
    }
    setToDos([...todos, todoItem])
    setNewTodo("")
  }

  const handleTodoDelete = (indexDel) => {
    const filteredTodos = todos.filter((todo, i) => {
      return i !== indexDel;
    })
    setToDos(filteredTodos)
  }

  const handleTodoComplete = (index) => {
    const updatedTodos = todos.map((todo, i) => {
      if (index === i) {
        const updatedTodo = {
          ...todo,
          complete: !todo.complete
        }
        return updatedTodo

      }
      return todo

    })
    setToDos(updatedTodos)

  }


  


  return (
    <div className="App">
      <form onSubmit={(event) => {
        handleNewTodoSubmit(event)
      }} >
        <input
          type='text'
          onChange={(event) => {
            setNewTodo(event.target.value)
          }}
          value={newTodo}
        />
        <div>
          <button>Add</button>
        </div>
      </form>

      {todos.map((todo, i) => {
        return (
          <Todo key={i}
            todo={todo}
            i={i}
            handleTodoComplete={handleTodoComplete}
            handleTodoDelete={handleTodoDelete} />
        )
      })}
    </div>
  );

  
}

export default App;
