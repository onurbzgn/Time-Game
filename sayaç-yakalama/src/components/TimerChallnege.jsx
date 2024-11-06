import { useRef, useState } from "react"
import ResultModal from "./ResultModal"
import { preview } from "vite"

export default function TimerChallange({ title, targetTime, }) {
    const timer = useRef()
    const dialog = useRef()

    const [timeRemaining, setTimeRemaning] = useState(targetTime * 1000)

    const timerActive = timeRemaining > 0 && timeRemaining < targetTime * 1000

    if (timeRemaining <= 0) {
        clearInterval(timer.current)
        setTimeRemaning(targetTime * 1000)
        dialog.current.open()
    }

    function handleReset() {
        setTimeRemaning(targetTime * 1000)
    }

    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemaning(prevTimeRemaining => prevTimeRemaining - 10)
        }, 10)
    }

    function handleStop() {
        dialog.current.open()
        clearInterval(timer.current)
    }
    return (
        <>
            <ResultModal ref={dialog} targetTime={targetTime} result="lose" onReset={handleReset} />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? "s" : ""}
                </p>
                <p>
                    <button onClick={timerActive ? handleStop : handleStart}>
                        {timerActive ? "stop" : "star"} challange
                    </button>
                </p>
                <p className={timerActive ? "active" : undefined}>
                    {timerActive ? "Time is running..." : "Timer İnactive"}
                </p>
            </section>
        </>
    )
}