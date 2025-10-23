import { WINNER_COMBOS } from "../utils/constants"

export const checkWinner = (boardToCheck) => { 
    for(let [a, b, c] of WINNER_COMBOS) {
        if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
        ) {
        return boardToCheck[a]
        }
    }
    return
}

export const checkEndGame = (boardToCheck) => { 
    return boardToCheck.every(square => square !== null)
}
   