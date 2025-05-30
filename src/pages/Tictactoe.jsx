import React, { useState } from "react";
import "../styles/Tictactoe.css";

const Tictactoe = () => {
  const initialBoard = Array(3).fill(null).map(() => Array(3).fill(""));
  const [board, setBoard] = useState(initialBoard);
  const [player, setPlayer] = useState(Math.random() < 0.5 ? "X" : "O");
  const [message, setMessage] = useState(`${player} Turn`);
  const [gameOver, setGameOver] = useState(false);
  const [winningCells, setWinningCells] = useState([]); // Winning line

  // Updated to return winner + winning cell positions
  const checkWinner = (b) => {
    for (let i = 0; i < 3; i++) {
      // Rows
      if (b[i][0] && b[i][0] === b[i][1] && b[i][1] === b[i][2]) {
        return { winner: b[i][0], cells: [[i, 0], [i, 1], [i, 2]] };
      }
      // Columns
      if (b[0][i] && b[0][i] === b[1][i] && b[1][i] === b[2][i]) {
        return { winner: b[0][i], cells: [[0, i], [1, i], [2, i]] };
      }
    }
    // Diagonals
    if (b[0][0] && b[0][0] === b[1][1] && b[1][1] === b[2][2]) {
      return { winner: b[0][0], cells: [[0, 0], [1, 1], [2, 2]] };
    }
    if (b[0][2] && b[0][2] === b[1][1] && b[1][1] === b[2][0]) {
      return { winner: b[0][2], cells: [[0, 2], [1, 1], [2, 0]] };
    }

    if (b.flat().every(cell => cell !== "")) {
      return { winner: "Tie", cells: [] };
    }

    return null;
  };

  const handleClick = (row, col) => {
    if (board[row][col] !== "" || gameOver) return;

    const updatedBoard = board.map((r, i) =>
      r.map((cell, j) => (i === row && j === col ? player : cell))
    );
    const result = checkWinner(updatedBoard);

    setBoard(updatedBoard);

    if (result) {
      if (result.winner === "Tie") {
        setMessage("It's a Tie!");
      } else {
        setMessage(`${result.winner} Wins!`);
        setWinningCells(result.cells);
      }
      setGameOver(true);
    } else {
      const nextPlayer = player === "X" ? "O" : "X";
      setPlayer(nextPlayer);
      setMessage(`${nextPlayer} Turn`);
    }
  };

  const resetGame = () => {
    const newPlayer = Math.random() < 0.5 ? "X" : "O";
    setBoard(initialBoard);
    setPlayer(newPlayer);
    setMessage(`${newPlayer} Turn`);
    setGameOver(false);
    setWinningCells([]); // Clear winning cells
  };

  return (
    <div className="tictactoe-container">
      <h1>{message}</h1>

      <div className="board-container">
        <div className="board">
          {board.map((row, rowIndex) => (
            <div key={rowIndex} className="row">
              {row.map((cell, colIndex) => {
                const isWinningCell = winningCells.some(
                  ([r, c]) => r === rowIndex && c === colIndex
                );
                return (
                  <button
                    key={colIndex}
                    className={`cell ${isWinningCell ? "winning-cell" : ""}`}
                    onClick={() => handleClick(rowIndex, colIndex)}
                  >
                    {cell}
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        <button className="reset-button" onClick={resetGame}>
          Restart
        </button>
      </div>
    </div>
  );
};

export default Tictactoe;
