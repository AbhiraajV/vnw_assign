import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import TodoList from "./Helper/TodoList";
import "./Helper/Dashboard.css";
import { useGetUser } from "../../Hooks/Query/User.Query";
import { segregateTodos } from "./Helper/Functions";
import { Content } from "../../Components/Sidebar/Helper/Content";
type Props = {};
export type todosObjects = {
  [k: string]: [{ [k: string]: any }];
};
function Dashboard({}: Props) {
  const [todos, setTodos] = useState<todosObjects>({});

  const [todosToDisplay, setTodosToDisplay] = useState("Today");
  const user = useGetUser();

  useEffect(() => {
    if (user && user.todos) segregateTodos(user.todos, setTodos);
  }, [user]);

  return (
    <div className="Dashboard">
      <Sidebar
        setTodosToDisplay={setTodosToDisplay}
        todosToDisplay={todosToDisplay}
        todos={todos}
      />
      <TodoList todos={todos} todosToDisplay={todosToDisplay} />
    </div>
  );
}

export default Dashboard;
