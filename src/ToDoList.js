// Library
import React from "react";
// Component
import ToDoItem from "./ToDoItem";

export default function ToDoList({ toDoList }) {
  // The map() method creates a new array populated with the results of calling a
  // provided function on every element in the calling array
  // Here we are mapping the array toDoList, creating a new array and returns
  // each element in the array
  return toDoList.map((toDoItem, index) => (
    <ToDoItem key={index} toDoItem={toDoItem} />
  ));
}

// what are our to dos
// how do we store them
