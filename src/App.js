import React, { useState, useEffect } from 'react'
import words from './data/CpuRandom.json'
import Player1 from './components/Player1.jsx'
import Player2 from './components/Player2'
import ResultAndReset from './components/ResultAndReset'

const App = () => {

  const [action1, setAction1] = useState('')
  const [action2, setAction2] = useState(words[Math.floor(Math.random() * words.length)])
  const [result, setResult] = useState('')

  const checkPlayerAction1 = playerAction1 => {

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


  const checkResult = () => {

    // draws 
    if (action1 === action2) {
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

  useEffect(() => 
  {
   checkResult()
  }, [checkPlayerAction1])


  return (
  <>
  <main>
    <Player1
    setAction1 = {setAction1}
    action1 = {action1}
    checkPlayerAction1 = {checkPlayerAction1}/>
   <ResultAndReset 
   result = {result}
   action2 = {action2}
   words = {words}
   setResult = {setResult}
   setAction1 = {setAction1}
   setAction2 = {setAction2}
   action1 = {action1}/>
    <Player2/>
  </main>
  </>)
}

export default App
