import { gql, useQuery } from "@apollo/client";

const GET_USER = gql`
  query GetUser {
    getUser {
      _id
      name
      email
      todos {
        isCompleted
        todoTitle
        Deadline
        _id
        tag
      }
    }
  }
`;
export const useGetUser = () => {
  const { error, loading, data } = useQuery(GET_USER);
  if (error) console.log({ error });
  if (data) console.log({ data });
  if (data && data.getUser) return data.getUser;
};
