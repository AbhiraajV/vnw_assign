import { gql } from "@apollo/client";

export const INVERT_TODO_STATE_MUTATION = gql`
  mutation Mutation($input: InvertTodoStatusInput!) {
    invertTodoStatusResolver(input: $input) {
      _id
      todoTitle
      isCompleted
      Deadline
    }
  }
`;

export const CREATE_TASK_MUTATION = gql`
  mutation CreateTaskResolver($input: createTaskInput!) {
    createTaskResolver(input: $input) {
      _id
      todoTitle
      tag
      isCompleted
      Deadline
    }
  }
`;
