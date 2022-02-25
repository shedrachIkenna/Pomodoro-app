import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import ReactSlider from 'react-slider'

const Pomodoro = ({pomodoroTodo}) => {
    
    return (
        <div className="grow bg-myGrey basis-7/12 p-7">
            <div className="text-center">
                <h2 className="text-center">Pomodoro</h2>
                <small className="text-center">Be productive the right way!</small>
            </div>
            <div className="flex justify-between flex-row flex-wrap">
                <div className="grow basis-6/12 border border-myBlue p-7 flex justify-center">
                    <CountdownCircleTimer
                        isPlaying
                        duration={7}
                        colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                        colorsTime={[7, 5, 2, 0]}
                    >
                        {({ remainingTime }) => remainingTime}
                    </CountdownCircleTimer>
                </div> 
                <p>{pomodoroTodo}</p>
                <div className="grow basis-6/12 border border-myBlue p-7">
                    <div>
                        <h3>Set Timer</h3>
                        <div>
                            <label htmlFor="">Todo task time: </label>
                            <ReactSlider 
                                className={"h-8 border-2 border-myDarkGrey"}
                                thumbClassName={"thumb"}
                                trackClassName={"track"}
                                value={45}
                                min={2}
                                max={120}
                                renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                            />
                        </div>
                    </div>
                    <div>
                        <button>Start</button>
                        <button>Stop</button>
                        <button>Reset</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pomodoro
