// Library
import React, { useState } from "react";
// Components
import AddToDo from "./AddToDo";
import Header from "./Header";
import ToDoList from "./ToDoList";
// Styles
import "./styles.css";

// useState function for updating the ToDoList
export default function App() {
  const [toDoList, setToDoList] = useState([]);

  // handleClick function for when the user presses Submit, two actions happen:
  // 1: Updates ToDoList by concatinating the new toDoItem to the new array updatedToDoList
  // 2. Updates the state of the toDoList
  function handleClick(toDoItem) {
    const updatedToDoList = toDoList.concat(toDoItem);
    setToDoList(updatedToDoList);
  }

  return (
    <div className="App">
      <Header />
      <AddToDo onClick={(toDoItem) => handleClick(toDoItem)} />
      <ToDoList toDoList={toDoList} />
    </div>
  );
}

// Still need to build:
// - check box to say its done
// - delete to delete it
// - tab to view complete, not complete, and all
