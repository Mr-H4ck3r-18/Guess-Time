import { useState, useRef } from 'react';
import ResultModal from './ResultModal';

export default function TimerChallenge({ title, targetTime }) {
    const [timeRemaining, setTimeRemaining] = useState(targetTime*1000)
    const timer = useRef();
    const dialog = useRef();

    const timerIsActive=timeRemaining>0 && timeRemaining<targetTime*1000

    if(timeRemaining<=0){
        clearInterval(timer.current)
        dialog.current.showModal();
    }
    const handleStart = () => {
        timer.current = setInterval(() => {
            setTimeRemaining(prev=>prev-10)
        }, 10)
    }
    const handleReset=()=>{
        setTimeRemaining(targetTime*1000)
    }
    const handleStop = () => {
        clearInterval(timer.current)
        dialog.current.showModal();

    }
    return (
        <>
            <ResultModal ref={dialog} targetTime={targetTime} result={timeRemaining>0?"won!":"lost!"} timeLeft={timeRemaining} onReset={handleReset}/>
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart}>{timerIsActive ? "Stop " : "Start "}Challenge</button>
                </p>
                <p className={timerIsActive ? "active" : undefined}>
                    "Timer is "{timerIsActive ? "Started" : "Stopped"}
                </p>
            </section>
        </>
    )
}