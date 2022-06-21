import React from "react";
import { todosObjects } from "../../Screens/Dashboard/Dashboard";
import DisplayContent from "./Helper/DisplayContent";
import "./Helper/Sidebar.css";
type Props = {
  setTodosToDisplay: React.Dispatch<React.SetStateAction<string>>;
  todosToDisplay: string;
  todos: todosObjects;
};

function Sidebar({ setTodosToDisplay, todosToDisplay, todos }: Props) {
  return (
    <div className="Sidebar">
      <DisplayContent
        setTodosToDisplay={setTodosToDisplay}
        todosToDisplay={todosToDisplay}
        todos={todos}
      />
    </div>
  );
}

export default Sidebar;
