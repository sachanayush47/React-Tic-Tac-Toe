import React, { useState } from "react";
import Board from "./components/Board";
import calculateWinner from "./helper"
import "./styles/App.scss"

const App = () => {

	const [board, setBoard] = useState(Array(9).fill(null));

    // Game starts from "X" player
    const [isCross, setIsNext] = useState(true);

	const winner = calculateWinner(board);
	const message = winner ? `Winner is ${winner}` : `Player turn: ${isCross ? "X" : "O"}`
	console.log(winner);

    const handleSquareClick = (position) => {

        if (board[position] !== null || winner) return;

        setBoard(board.map((square, index) => {
            if (position == index) {
                return isCross ? "X" : "O"
            }
            return square
        }));

        setIsNext(!isCross);
    }

	return (
		<div className="app">
    		<h1>TIC TAC TOE</h1>
			<h3>{message}</h3>
			<Board board={board} handleSquareClick={handleSquareClick} />
  		</div>
	)
}

export default App;