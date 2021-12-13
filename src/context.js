// Libraries
import { createContext, useContext } from "react";

export const ToDoListContext = createContext();

export function useToDoListContext() {
  return useContext(ToDoListContext);
}
