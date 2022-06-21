import React, { useState } from "react";
import { RiDeleteBinFill } from "react-icons/ri";
import { GrAdd } from "react-icons/gr";
import Checkbox from "../../../Components/Checkbox/Checkbox";
import { todosObjects } from "../Dashboard";
import { useMutation } from "@apollo/client";
import { INVERT_TODO_STATE_MUTATION } from "../../../Hooks/Mutation/Todo.Mutation";
import { InvertTodoFunction, options } from "./Functions";
import Switch from "../../../Components/SwitchBox/Switch";
import TodoListItem from "./TodoListItem";
type Props = {
  todos: todosObjects;
  todosToDisplay: string;
};

function TodoList({ todos, todosToDisplay }: Props) {
  const [toShow, setToShow] = useState<{ [k: string]: any }>({
    complete: false,
    incomplete: true,
  });
  return (
    <div className="TodoListPage">
      <div className="curTypeTitle">{todosToDisplay}</div>
      <Switch options={options} setToShow={setToShow} toShow={toShow} />
      <div className="TodoList">
        {todos[todosToDisplay] &&
          todos[todosToDisplay].map((item, index) => (
            <TodoListItem item={item} key={index} toShow={toShow} />
          ))}
      </div>
    </div>
  );
}

export default TodoList;
