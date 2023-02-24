import React from "react";
import Guess from "../Guess/Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessesList({guesses, answer}) {
  const guessesSlots = range(0, NUM_OF_GUESSES_ALLOWED).map((guess) => (<Guess key={guess} answer={answer} guessValue={guesses[guess] ? guesses[guess] : ''}/>))
  return (
  <div className="guess-results">
    {guessesSlots}
  </div>    
  );
}

export default GuessesList;
