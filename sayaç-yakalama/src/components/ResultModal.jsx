import { forwardRef, useImperativeHandle, useRef } from "react"


const ResultModal = forwardRef(function ResultModal({ targetTime, remaningTime, onReset }, ref,) {

    const dialog = useRef()
    const userLost = remaningTime <= 0
    const formattedRemaininigTime = (remaningTime / 1000).toFixed(2)
    const score = Math.round((1 - remaningTime / (targetTime*1000)) * 100)

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal()
            }
        }
    })
    return (
        <dialog ref={dialog} className="result-modal" >
            <h2>
                {userLost && <h2> You Lost </h2>}
                {!userLost && <h2> Your Score:{score} </h2> } 
            </h2>
            <p>
                The Target time was <strong>{targetTime} seconds.</strong>
            </p>
            <p>
                The stopped timer with <strong>{formattedRemaininigTime} seconds left.</strong>
            </p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>
    )
})
export default ResultModal