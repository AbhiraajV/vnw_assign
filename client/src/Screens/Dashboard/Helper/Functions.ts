import moment from "moment";
import UseReload from "../../../Hooks/UseReload";
import { todosObjects } from "../Dashboard";

export const checkDate = (
  date: string
): "Today" | "Tomorrow" | "Overdue" | "Later" => {
  const now = moment(date, "DD-MM-YYYY");
  const today = moment().startOf("day");
  const endToday = moment().endOf("day");
  const tomorrow = moment().add(1, "day").startOf("day");
  const dayAfterTom = moment().add(1, "day").startOf("day");
  if (now < today) return "Overdue";
  if (now > tomorrow && now < dayAfterTom) return "Tomorrow";
  if (now < tomorrow) return "Today";
  return "Later";
};

// export const TodosAll = (todos: any[]): any => {
//   var allTodos : any[]
//   for(var i in todos) allTodos.ad

// }
export const TodosByTags = (todos: any[]): any => {
  var todosByTag: { [k: string]: any[] } = {
    Home: [],
    Personal: [],
    Office: [],
  };
  for (var i in todos) todosByTag[todos[i].tag].push(todos[i]);
  console.log({ todosByTag });
  return todosByTag;
};
export const TodosByDate = (todos: any[]): any => {
  var todosByDate: { [k: string]: any[] } = {
    Today: [],
    Tomorrow: [],
    Later: [],
    Overdue: [],
  };
  for (var i in todos) todosByDate[checkDate(todos[i].Deadline)].push(todos[i]);
  console.log({ todosByDate });
  return todosByDate;
};

export const segregateTodos = (
  todos: any[],
  setTodos: React.Dispatch<React.SetStateAction<todosObjects>>
): any => {
  setTodos({ All: todos, ...TodosByDate(todos), ...TodosByTags(todos) });
};

export const InvertTodoFunction = (
  input: { todoId: string },
  InvertTodo: any
) => {
  InvertTodo({
    variables: {
      input,
    },
  })
    .then((data: any) => {
      console.log(data.data);
      // UseReload();
    })
    .catch((err: { graphQLErrors: any }) => console.log(err.toString()));
};
export const options = [
  { type: "complete", label: "Show Completed Tasks" },
  { type: "incomplete", label: "Show Incomplete Tasks" },
];
