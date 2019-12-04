import React, {useEffect} from 'react';
import Player1 from './Player1'

const ResultAndReset = props => {
  
  const resetGame = () => {
    props.setAction1('')
    props.setResult('')
    props.setAction2(props.words[Math.floor(Math.random() * props.words.length)])
  }

  return (
    <>
    <div>
      {props.result}
    </div>
    <button onClick={() => resetGame()} disabled={props.action1 === ''}>Reset</button>
    </>
  );
}

export default ResultAndReset;
