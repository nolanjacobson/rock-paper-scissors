import React, {useEffect} from 'react';

const Player1 = props => {

  return (
    <>
  <div>Player 1</div>
    <button onClick={() => props.checkPlayerAction1('rock1')} disabled={props.action1 != ''}>Rock</button>
    <button onClick={() => props.checkPlayerAction1('paper1')} disabled={props.action1 != ''}>Paper</button>
    <button onClick={() => props.checkPlayerAction1('scissors1')} disabled={props.action1 != ''}>Scissors</button>
  </>
  );
}

export default Player1;
