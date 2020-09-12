import React, { useState } from "react";

function TodoForm(props) {
    //variables 
    const { addTodo } = props
    const [value, setValue] = useState("")
    //method
    const handleSubmit = (event) => {
        event.preventDefault()
        if(!value) {
            return
        }
        addTodo(value)
        setValue("")
    }

    //template
    return (
        <form onSubmit={handleSubmit}>
            <input 
                value={value}
                type="text" 
                placeholder="Add here.." 
                onChange={(event) => setValue(event.target.value)}
            />
        </form>
    )
}

export default TodoForm