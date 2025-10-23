import { INITIAL_BOARD, INITIAL_TURN, TURNS } from "../utils/constants";
import { checkEndGame, checkWinner } from "../logic/board"
import { useEffect, useState } from "react";

import { Square } from "./Square";
import { WinnerModal } from "../components/WinnerModal"
import confetti from "canvas-confetti"

export default function Game() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem("board")
    return boardFromStorage ? JSON.parse(boardFromStorage) : INITIAL_BOARD
  })
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem("turn")
    return turnFromStorage ?? INITIAL_TURN
  })
  const [winner, setWinner] = useState(null)

  useEffect(() => {
    const newWinner = checkWinner(board)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(board)) {
      setWinner(false)
    }
  }, [board])

  const resetGame = () => {
    setBoard(INITIAL_BOARD)
    setTurn(INITIAL_TURN)
    setWinner(null)

    window.localStorage.removeItem("board")
    window.localStorage.removeItem("turn")
  }

  const updateBoard = (index) => {
    if (board[index] || winner) return

    const newBoard = [...board]
    
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    window.localStorage.setItem("board", JSON.stringify(newBoard))
    window.localStorage.setItem("turn", newTurn)
  }
  
  return (
    <>
      <button onClick={resetGame}>Reiniciar juego</button>

      <section className="game">
        {
          board.map((square, index) => (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
          ))
        }
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame} />
    </>
  )
}