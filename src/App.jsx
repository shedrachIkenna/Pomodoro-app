import Pomodoro from './components/Pomodoro'
import Todos from './components/Todos'


const App = () => {
  return (
    <div className="App font-roboto">
      <div className="flex mx-auto my-0 flex-row justify-between max-w-5xl border border-myBlue">
        <Todos />
        <Pomodoro />
      </div>
    </div>
  )
}

export default App
