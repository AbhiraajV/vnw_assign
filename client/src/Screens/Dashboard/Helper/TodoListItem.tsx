import { useMutation } from "@apollo/client";
import React from "react";
import { RiDeleteBinFill } from "react-icons/ri";
import Checkbox from "../../../Components/Checkbox/Checkbox";
import { INVERT_TODO_STATE_MUTATION } from "../../../Hooks/Mutation/Todo.Mutation";
import { InvertTodoFunction } from "./Functions";

type Props = {
  item: { [k: string]: any };
  key: any;
  toShow: {
    [k: string]: any;
  };
};

function TodoListItem({ item, key, toShow }: Props) {
  const [InvertTodo] = useMutation(INVERT_TODO_STATE_MUTATION);
  if (
    !(
      (toShow["complete"] === true && item.isCompleted) ||
      (toShow["incomplete"] === true && !item.isCompleted)
    )
  )
    return <></>;

  return (
    <div className="todoItem" key={key}>
      <Checkbox
        isChecked={item.isCompleted}
        onClick={() => InvertTodoFunction({ todoId: item._id }, InvertTodo)}
      />
      <div className="itemDesc">
        <div className="itemContent">{item.todoTitle}</div>
        <div className="itemDate">{item.Deadline}</div>
        <div className="itemDate">{item.tag}</div>
      </div>
      <div className="DeleteTodo">
        <RiDeleteBinFill />
      </div>
    </div>
  );
}

export default TodoListItem;
