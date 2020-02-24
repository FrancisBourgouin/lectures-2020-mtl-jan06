import React, { useState } from "react";
import { storePlayerChoice, announceResult } from "./helpers";
// import "./App.scss";

function App() {
  const [gameState, setGameState] = useState("initial");
  const [choices, setChoices] = useState({
    player1: null,
    player2: null
  });

  const emojiButtons = ["🌴", "🪓", "🗿"].map(emoji => (
    <button
      key={emoji}
      data-testid={emoji}
      onClick={e =>
        storePlayerChoice(e, choices, setChoices, gameState, setGameState)
      }
    >
      {emoji}
    </button>
  ));

  return (
    <div className='App'>
      <h1>Welcome to Moai vs Axe vs Tree</h1>
      {gameState === "initial" && (
        <button onClick={() => setGameState("player1")}>Start game</button>
      )}
      {gameState === "player1" && <section>{emojiButtons}</section>}
      {gameState === "player2" && <section>{emojiButtons}</section>}
      {gameState === "result" && choices.player1 && choices.player2 && (
        <p>{announceResult(choices.player1, choices.player2)}</p>
      )}
    </div>
  );
}

export default App;
