import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <TicTacToe />
    </div>
  );
}

function TicTacToe(){
  return(
    <Game />
  )
}

function Game(){
  const[board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const decideWinner =(board) => {
    const lines=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        return board[a];
      }
    }
    return null;
  }

  const winner = decideWinner(board);

  const[isXturn, setIsXturn ] = useState(true);

  const handleClick=(index) =>{
    if(!board[index] && !winner){
      const boardCopy=[...board]
      boardCopy[index]=isXturn? "X" : "0";
      setBoard(boardCopy);
      setIsXturn(!isXturn);
    }
  }

  const restart =() => {
    setBoard([null,null,null,null,null,null,null,null,null])
  }

  return(
    <div className="fullGame">
      <div className="Game-Container">
      {board.map((val, index) => (
        <GameBox val={val} onplayerClick={()=> handleClick(index) }/>
      ))}
    </div>
        <h1> 
          {winner? "The winner is " + winner :  (isXturn ? "X" : "O") + " Turn"}

        </h1>
        <button onClick={restart} className="resetBtn">Reset</button>      
    </div>    
  )
}


function GameBox({val, onplayerClick}){
  const styles={ color: val==="X"? "green" : "red" }
  return(
    <div style={styles} onClick={onplayerClick} className="Game-box">{val}</div>
  )
}

export default App;
