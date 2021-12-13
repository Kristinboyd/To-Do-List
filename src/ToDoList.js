// Libraries
import React from "react";
// Components
import ToDoItem from "./ToDoItem";
// Context
import { useToDoListContext } from "./context";

export default function ToDoList({ ...props }) {
  const { toDoList } = useToDoListContext();
  // The map() method creates a new array populated with the results of calling a
  // provided function on every element in the calling array
  // Here we are mapping the array toDoList, creating a new array and returns
  // each element in the array
  return toDoList.map((toDoItem, index) => (
    <ToDoItem key={index} toDoItem={toDoItem} />
  ));
}
