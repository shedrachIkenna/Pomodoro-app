import { useState } from 'react'

const Navbar = () => {
    const [todos, setTodos] = useState([
        { id: 1, content: "Make More money" },
        { id: 2, content: "Make More money" },
        { id: 3, content: "Make More money" }
    ]);
    
    console.log(todos)

    const todosList = todos.length ? (
        todos.map((todo) => {
            return (
                <div className="" key={todo.id}>
                    <span>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <p className="text-center text-myBrown">You have no Todos left yay!</p>
    )

    return (
        <div className="bg-myWhite w-2/5 p-7">
            <h3>ToDo List</h3>
            <div>
                {todosList}
            </div>
        </div>
    )
}

export default Navbar
