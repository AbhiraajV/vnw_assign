import React from "react";
import "./AddTodo.css";
import AddTodoForm from "./Helper/AddTodoForm";
type Props = {
  setAddTaskPage: React.Dispatch<React.SetStateAction<boolean>>;
};

function AddTodo({ setAddTaskPage }: Props) {
  return (
    <>
      <div className="AddTodoHolder">
        <div className="AddTodoFormHead">Add Task</div>
        <AddTodoForm setAddTaskPage={setAddTaskPage} />
      </div>
      <div className="AddTodoBack" />
    </>
  );
}

export default AddTodo;
