import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { CREATE_TASK_MUTATION } from "../../../Hooks/Mutation/Todo.Mutation";
import formInputs from "./FormInputs";
import { AddTaskFunction } from "./Functions";
import Input from "./InputRender";

type Props = {
  setAddTaskPage: React.Dispatch<React.SetStateAction<boolean>>;
};
function AddTodoForm({ setAddTaskPage }: Props) {
  const [createTask] = useMutation(CREATE_TASK_MUTATION);
  const [addTaskInput, setAddTaskInput] = useState({
    todoTitle: "",
    Deadline: "",
    tag: "",
  });
  return (
    <div className="AddFormCon">
      <div className="AddTaskForm">
        {formInputs.map((input, key) => (
          <Input
            key={key}
            input={input}
            setAddTaskInput={setAddTaskInput}
            addTaskInput={addTaskInput}
          />
        ))}
      </div>

      <div className="AddTaskFormButtons">
        <button
          className="AddButton"
          onClick={() => AddTaskFunction(addTaskInput, createTask)}
        >
          Add Task
        </button>
        <button className="CancelButton" onClick={() => setAddTaskPage(false)}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default AddTodoForm;
