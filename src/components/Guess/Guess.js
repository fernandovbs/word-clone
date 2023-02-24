import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({guessValue = '', answer }) {

  const validatedGuess = checkGuess(guessValue, answer);
  console.log(validatedGuess); 
  const cells = range(0,5).map(item => (
    <span className={`cell ${validatedGuess ? validatedGuess[item].status : ''}`} key={item}>{guessValue[item] ? guessValue[item] : ''}</span>
  ))
  return (<p className="guess">
    {cells}
  </p>
  );
}

export default Guess;
