import React, { useState, useEffect } from 'react'
import words from './data/CpuRandom.json'

const App = () => {

  const [action1, setAction1] = useState('')
  const [action2, setAction2] = useState(words[Math.floor(Math.random() * words.length)])
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

  // const checkPlayerAction2 = playerAction2 => {
  //   console.log(playerAction2)
  //   if (playerAction2 === 'rock2') {
  //     setAction2(playerAction2)
  //   }
  //   else if (playerAction2 === 'paper2') {
  //     setAction2(playerAction2)
  //   }
  //   else if (playerAction2 === 'scissors2') {
  //     setAction2(playerAction2)
  //   }
  // }

  useEffect(() => 
  {
    checkResult()
  }, [checkPlayerAction1])
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
    console.log(result)
  }

  const resetGame = () => {
    setAction1('')
    setResult('')
    setAction2(words[Math.floor(Math.random() * words.length)])
  }

  return (
  <>
  <main>
    <div>Player 1</div>
    <button onClick={() => checkPlayerAction1('rock1')} disabled={action1 != ''}>Rock</button>
    <button onClick={() => checkPlayerAction1('paper1')} disabled={action1 != ''}>Paper</button>
    <button onClick={() => checkPlayerAction1('scissors1')} disabled={action1 != ''}>Scissors</button>
    <div>{result}</div>
    <div>Player 2</div>
    <button disabled={true}>Rock</button>
    <button disabled={true}>Paper</button>
    <button disabled={true}>Scissors</button>
    <button onClick={() => resetGame()} disabled={action1 === ''}>Reset</button>
  </main>
  </>)
}

export default App
