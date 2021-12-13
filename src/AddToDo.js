// Libraries
import React, { useRef, useState } from "react";

export default function AddToDo({ onClick }) {
  // useState function for updating the inputValue
  // (what the user inputs in the add to do bar)
  const [inputValue, setInputValue] = useState("");

  // input element ref
  const inputRef = useRef(null);
  // inputRef = { current: null };

  // handleClick function for when the user presses Submit, one action happens:
  // 1: Updates inputValue when user clicks submit.
  function handleClick() {
    onClick(inputValue);
    setInputValue("");
    inputRef.current.focus();
  }

  return (
    <div>
      {/* The <input> HTML element is used to create interactive controls for 
      web-based forms in order to accept data from the user */}
      <input
        // onChange = The onchange attribute fires the moment
        // the value of the element is changed - the user typing into add to do bar.
        // COME BACK TO THIS AND ADD MORE RE e.target.value
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add to do"
        ref={inputRef}
        value={inputValue}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}
