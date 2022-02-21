import Pomodoro from './components/Pomodoro'
import Todos from './components/Todos'


const App = () => {
  return (
    <div className="App font-roboto">
      <div className="">
        <Todos />
        <Pomodoro />
      </div>
    </div>
  )
}

export default App
