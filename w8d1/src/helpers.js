export const storePlayerChoice = (
  event,
  choices,
  setChoices,
  gameState,
  setGameState
) => {
  switch (gameState) {
    case "player1":
      setChoices({ ...choices, player1: event.target.innerText });
      setGameState("player2");
      break;
    case "player2":
      setChoices({ ...choices, player2: event.target.innerText });
      setGameState("result");
      break;
    default:
      break;
  }
};

export const announceResult = (playerSelection, compSelection) => {
  switch (playerSelection) {
    case "🗿":
      if (compSelection === "🌴") {
        return "Lost";
      } else if (compSelection === "🪓") {
        return "Won";
      } else {
        return "Tied";
      }
    case "🪓":
      if (compSelection === "🗿") {
        return "Lost";
      } else if (compSelection === "🌴") {
        return "Won";
      } else {
        return "Tied";
      }
    case "🌴":
      if (compSelection === "🪓") {
        return "Lost";
      } else if (compSelection === "🗿") {
        return "Won";
      } else {
        return "Tied";
      }
      break;
    default:
      return "Waiting";
  }
};
