import React from "react";
import { Content, ContentType } from "./Content";
import { AiOutlineOrderedList } from "react-icons/ai";
import { todosObjects } from "../../../Screens/Dashboard/Dashboard";
type Props = {
  setTodosToDisplay: React.Dispatch<React.SetStateAction<string>>;
  todosToDisplay: string;
  todos: todosObjects;
};

function DisplayContent({ setTodosToDisplay, todosToDisplay, todos }: Props) {
  return (
    <>
      {Object.keys(todos).map((key, index) => (
        <>
          <div
            className={todosToDisplay === key ? "contentSelected" : "content"}
            onClick={() => setTodosToDisplay(key)}
          >
            <AiOutlineOrderedList className="sidebarIcon" />
            <div className="contentText">{key}</div>
            <div>{todos[key].length}</div>
          </div>
          {key === "Overdue" && <div className="smline" />}
        </>
      ))}
    </>
  );
}

export default DisplayContent;
