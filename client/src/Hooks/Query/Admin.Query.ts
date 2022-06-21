import { gql, useQuery } from "@apollo/client";

const GET_ADMIN_REPORT = gql`
  query Query {
    getAdminReport {
      name
      email
      todoTitle
      tag
      Deadline
    }
  }
`;
const GET_WEEKLY_COUNT = gql`
  query Query {
    getCount {
      pos
      total
      lastWeek
    }
  }
`;
export const useGetReport = () => {
  const { error, loading, data } = useQuery(GET_ADMIN_REPORT);
  if (error) console.log({ error });
  if (data) console.log(data.getAdminReport);
  if (data && data.getAdminReport) return data.getAdminReport;
};

export const useGetCount = () => {
  const { error, loading, data } = useQuery(GET_WEEKLY_COUNT);
  if (error) console.log({ error });
  if (data) console.log(data.getCount);
  if (data && data.getCount) return data.getCount;
};
