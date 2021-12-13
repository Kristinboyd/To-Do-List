// Libraries
import React from "react";
// Context
import { useToDoListContext } from "./context";

export default function ToDoItem({ toDoItem }) {
  const { removeToDoItem } = useToDoListContext();

  return (
    <p style={{ textAlign: "left", padding: "10px" }}>
      <button onClick={() => removeToDoItem(toDoItem)}>Remove</button>
      {toDoItem}
    </p>
  );
}

// Still need:
// remove button to remove the item
// we might be able to use the remove() method

// Remove button removes the task from the ToDoList
