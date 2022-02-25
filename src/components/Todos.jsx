
const Navbar = ({todos, showTodo}) => {
    
    const todosList = todos.length ? (
        todos.map((todo) => {
            return (
                <div className="py-2 border-b flex justify-between items-center" key={todo.id}>
                    <span onClick = {() => {showTodo(todo.content)}}>{todo.content}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </div>
            )
        })
    ) : (
        <p className="text-center text-myBrown">You have no Todos left yay!</p>
    )

    return (
        <div>
            <h3 className="text-center">ToDo List</h3>
            <div className="py-7 px-2">
                {todosList}
            </div>
        </div>
    )
}

export default Navbar
