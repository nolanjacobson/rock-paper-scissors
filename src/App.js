import React, { useState } from 'react'


const App = () => {

  const [action1, setAction1] = useState('')
  const [action2, setAction2] = useState('')
  const [result, setResult] = useState('')

  const checkPlayerAction1 = playerAction1 => {
    console.log(playerAction1)
    if (playerAction1 === 'rock1') {
      setAction1(playerAction1)
    }
    else if (playerAction1 === 'paper1') {
      setAction1(playerAction1)
    }
    else if (playerAction1 === 'scissors1') {
      setAction1(playerAction1)
    }
  }

  const checkPlayerAction2 = playerAction2 => {
    console.log(playerAction2)
    if (playerAction2 === 'rock2') {
      setAction2(playerAction2)
    }
    else if (playerAction2 === 'paper2') {
      setAction2(playerAction2)
    }
    else if (playerAction2 === 'scissors2') {
      setAction2(playerAction2)
    }
  }

  const checkResult = () => {

    // draws 
    if (action1 === 'rock1' && action2 === 'rock2') {
      setResult('Draw')
    }
    else if (action1 === 'paper1' && action2 === 'paper2') {
      setResult('Draw')
    }
    else if (action1 === 'scissors1' && action2 === 'scissors2') {
      setResult('Draw')
    }
    // scissors cut paper
    else if (action1 === 'scissors1'  && action2 === 'paper2' ) {
      setResult('User 1 Wins')
    }

    else if (action1 === 'paper1'  && action2 === 'scissors2' ) {
      setResult('User 2 Wins')
    }

    // paper covers rock
    else if (action1 === 'paper1'  && action2 === 'rock2' ) {
      setResult('User 1 Wins')
    }

    else if (action1 === 'rock1'  && action2 === 'paper2' ) {
      setResult('User 2 Wins')
    }

    // rock stomps scissors 
    else if (action1 === 'rock1'  && action2 === 'scissors2' ) {
      setResult('User 1 Wins')
    }

    else if (action1 === 'scissors1'  && action2 === 'rock2' ) {
      setResult('User 2 Wins')
    }
  }

  return (
  <>
  <main>
    <div>Player 1</div>
    <button onClick={() => checkPlayerAction1('rock1')} disabled={action1 != ''}>Rock</button>
    <button onClick={() => checkPlayerAction1('paper1')} disabled={action1 != ''}>Paper</button>
    <button onClick={() => checkPlayerAction1('scissors1')} disabled={action1 != ''}>Scissors</button>
    <div>Result: <button onClick = {() => checkResult()} disabled={result != ''}></button>{result}</div>
    <div>Player 2</div>
    <button onClick={() => checkPlayerAction2('rock2')} disabled={action2 != ''}>Rock</button>
    <button onClick={() => checkPlayerAction2('paper2')} disabled={action2 != ''}>Paper</button>
    <button onClick={() => checkPlayerAction2('scissors2')} disabled={action2 != ''}>Scissors</button>
  </main>
  </>)
}

export default App
