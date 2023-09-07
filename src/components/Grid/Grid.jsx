import { useState } from "react";
import Card from "../Cards/Card";
import "./Grid.css";
import iswinner from "../../helpers/checkWinner";
function Grid({ numberofcards }) {
  const [board, setBoard] = useState(Array(numberofcards).fill(""));
  const [turn, setturn] = useState(true);
  const [winner, setwinner] = useState(null);
  function Play(index) {
    if (turn == true) {
      board[index] == "O";
    } else {
      board[index] == "X";
    }
    const win = iswinner(board, turn ? "O" : "X");
    if (win) {
      setwinner(win);
    }
    setBoard([...board]);
    setturn(!turn);
  }
  function reset(){
    setturn(true);
    setwinner(null);
    setBoard(Array(numberofcards).fill(""))
  }
  return (
    <div className="grid-wrappper">
      {winner && (
        <>
          <h1 className="turn-highlight">Winner is {winner}</h1>
          <button className="reset" onClick={reset}>Reset game</button>
        </>
      )}
      <h1 className="turnhighlight">Current turn {(turn) ? "O" : "X"}</h1>
      <div className="grid">
        {board.map((el, idx) => 
          <Card key={idx} onPlay={Play} player={el} index={idx} />
        )}
      </div>
    </div>
  );
}
export default Grid;
