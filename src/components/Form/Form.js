import React from "react";

function Form({handleFormSubmit}) {
 const [guessValue, setGuessValue] = React.useState('');
 
 function handleSubmit(e){
  e.preventDefault();
  handleFormSubmit(guessValue);
  setGuessValue('');
 }

  return (
  <form className="guess-input-wrapper" onSubmit={handleSubmit}>
    <label htmlFor="guess-input">Enter guess:</label>
    <input id="guess-input" type="text"  pattern="[A-Za-z]{5}" value={guessValue} onChange={(e) => {setGuessValue(e.target.value?.toUpperCase())}}/>
  </form>  
  );
}

export default Form;
