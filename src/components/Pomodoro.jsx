import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import ReactSlider from 'react-slider'

const Pomodoro = ({pomodoroTodo}) => {
    
    return (
        <div className="grow bg-myGrey basis-7/12 p-7">
            <div className="text-center">
                <h3 className="text-center">Pomodoro</h3>
                <small className="text-center">Be productive the right way!</small>
            </div>
            <div className="flex justify-between flex-row flex-wrap">
                <div className="grow basis-6/12 border border-myBlue p-7 flex flex-col justify-center items-center">
                    <CountdownCircleTimer
                        isPlaying
                        duration={7}
                        colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                        colorsTime={[7, 5, 2, 0]}
                    >
                        {({ remainingTime }) => remainingTime}
                    </CountdownCircleTimer>
                    <div className="flex justify-evenly w-3/4 items-center py-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                    </div>
                    <p>{pomodoroTodo}</p>
                </div> 
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
