import { gql } from "@apollo/client";

export const REGISTER_USER_MUTATION = gql`
  mutation RegisterUser($input: CreateUserInput!) {
    registerUser(input: $input) {
      _id
      name
      email
      todos {
        isCompleted
      }
    }
  }
`;

export const LOGIN_USER_MUTATION = gql`
  mutation Login($input: LoginUserInput!) {
    login(input: $input)
  }
`;
