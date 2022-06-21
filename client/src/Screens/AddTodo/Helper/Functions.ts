import UseReload from "../../../Hooks/UseReload";

export const AddTaskFunction = (input: any, createTask: any) => {
  console.log({ input });
  createTask({
    variables: {
      input,
    },
  })
    .then((data: any) => {
      console.log(data.data);
      console.log("RELOAD");
      UseReload();
    })
    .catch((err: { graphQLErrors: any }) => console.log(err.toString()));
};
