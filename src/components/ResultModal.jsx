import { forwardRef } from "react"
const ResultModal =forwardRef(function ResultModal({targetTime,timeLeft ,onReset},ref) {
    const score=Math.round((1-timeLeft/(targetTime*1000))*100);
    const userLost=timeLeft<1
    return (
        <dialog ref = {ref} className="result-modal" onClose={onReset} >
            {userLost ? <h2>You lost!</h2> : <h2>Your Score: {score}</h2> }
            {}
            <p>Target time was <strong>{targetTime}</strong></p>
            <p>You stopped timmer with <strong>{(timeLeft/1000).toFixed(2)} Seconds</strong></p>
            <form method="dialog" onSubmit={onReset}>
                <button >Close</button>
            </form>
        </dialog>
    )
})

export default ResultModal;