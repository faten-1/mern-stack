import React from 'react'


const Todo = (props) => {
    const {todo,i,handleTodoComplete,handleTodoDelete} = props;
    const todoClasses = ['italic', 'bold']
    if (todo.complete) {
        todoClasses.push('strike')
    }
    return (
        <div >
            <input onChange={(event) => {
                handleTodoComplete(i)
            }} checked={todo.complete} type='checkbox' />
            <span
                className={todoClasses.join(" ")}>{todo.text}</span>
            <button onClick={(event) => {
                handleTodoDelete(i)
            }}
                style={{ marginLeft: "15px" }}>

                Delete</button>
        </div>


    )
}

export default Todo