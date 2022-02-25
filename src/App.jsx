import { useState } from 'react'
import Pomodoro from './components/Pomodoro'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'


const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, content: "Make More money" },
    { id: 2, content: "Learn blockchain development" },
    { id: 3, content: "Become a profitable forex trader" }
  ]);

  const [pomodoroTodo, setPomodoroTodo] = useState('')

  const showTodo = (content) => {
      console.log(content)
      setPomodoroTodo(content)
  }

  const addTodo = (todo) => {
    todo.id = Math.random();
    // let todos = [...this.state.todos, todo];
    console.log(todo)
    setTodos([
      ...todos,todo
    ])
  }

  return (
    <div className="App font-roboto">
      <div className="h-full flex flex-wrap mx-auto my-0 flex-col lg:flex-row justify-between max-w-7xl border border-myBlue">
        <Pomodoro pomodoroTodo={pomodoroTodo}/>
        <div className="grow bg-myWhite basis-5/12 p-7">
          <AddTodo addTodo={addTodo}/>
          <Todos todos={todos} showTodo={showTodo}/>
        </div>
      </div>
    </div>
  )
}

export default App
