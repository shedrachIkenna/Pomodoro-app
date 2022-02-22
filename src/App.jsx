import { useState } from 'react'
import Pomodoro from './components/Pomodoro'
import Todos from './components/Todos'


const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, content: "Make More money" },
    { id: 2, content: "Learn blockchain development" },
    { id: 3, content: "Become a profitable forex trader" }
  ]);

  const showTodo = (id) => {
      console.log(id)
  }

  return (
    <div className="App font-roboto">
      <div className="h-full flex flex-wrap mx-auto my-0 flex-col lg:flex-row justify-between max-w-7xl border border-myBlue">
        <Todos todos={todos} showTodo={showTodo}/>
        <Pomodoro todos={todos} showTodo={showTodo}/>
      </div>
    </div>
  )
}

export default App
