// Libraries
import React, { useState } from "react";
// Components
import AddToDo from "./AddToDo";
import Header from "./Header";
import ToDoList from "./ToDoList";
// Context
import { ToDoListContext } from "./context";
// Styles
import "./styles.css";

// useState function for updating the ToDoList
export default function App() {
  const [toDoList, setToDoList] = useState([]);

  // function to remove the todoitem
  function removeToDoItem(toDoItem) {
    const updatedToDoList = toDoList.filter((item) => item !== toDoItem);
    setToDoList(updatedToDoList);
  }
  // handleClick function for when the user presses Submit, two actions happen:
  // 1: Updates ToDoList by concatinating the new toDoItem to the new array updatedToDoList
  // 2. Updates the state of the toDoList
  function handleClick(toDoItem) {
    const updatedToDoList = toDoList.concat(toDoItem);
    setToDoList(updatedToDoList);
  }
  const toDoListContextValue = { toDoList, removeToDoItem };

  // ToDoListContext.Provider is the element that is giving all its children inside it access
  // to the props that it needs
  return (
    <ToDoListContext.Provider value={toDoListContextValue}>
      <div className="App">
        <Header />
        <AddToDo onClick={(toDoItem) => handleClick(toDoItem)} />
        <ToDoList />
      </div>
    </ToDoListContext.Provider>
  );
}

// Still need to build:
// - check box to say its done
// - delete to delete it
// - tab to view complete, not complete, and all
