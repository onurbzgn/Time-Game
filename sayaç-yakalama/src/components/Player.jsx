import { useRef } from "react";
import { useState } from "react";


export default function Player() {
  const playerName=useRef()
  const [enteredPlayerName,setEnteredPlayerName]=useState("")
  function handleclick() {
    setEnteredPlayerName(playerName.current.value)
  }
  return (
    <section id="player">
      <h2>Welcome  {enteredPlayerName ?? "unknow entity"}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleclick}>Set Name</button>
      </p>
    </section>
  );
}
