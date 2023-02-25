import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Form from '../Form';
import GuessesList from '../GuessesList';
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.

function Game() {
  const [guesses, SetGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('running');
  const [playerWon, setPlayerWon] = React.useState(false);
  const [answer, setAnswer] = React.useState(sample(WORDS));

  console.info({ answer });

  function resetGame() {
    setAnswer(sample(WORDS)); 
    setGameStatus('running'); 
    SetGuesses([]);
    console.info({ answer });
  }

  function makeGuess(guess) {

    SetGuesses([...guesses, guess]);

    if (guesses.length >= (NUM_OF_GUESSES_ALLOWED - 1) && (guess !== answer)) {
      setGameStatus('lose');
      return;
    }

    if (guess === answer) {
      setGameStatus('won');
    }
  }
  
  return <>
    {(gameStatus === 'won') && 
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in {' '}
        <strong>{guesses.length} guesses</strong>.
    </p>
    <p><button onClick={resetGame}>Play again!</button></p>
    </div>
    }
    {(gameStatus === 'lose') && 
      <div className="sad banner">
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
        <p><button onClick={resetGame}>Play again!</button></p>
      </div>
    }    
    <GuessesList guesses={guesses} answer={answer} />
    {gameStatus === 'running' && <Form handleFormSubmit={makeGuess} />}
  </>;
}

export default Game;
