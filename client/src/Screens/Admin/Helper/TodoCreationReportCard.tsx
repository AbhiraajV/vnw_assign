import React from "react";
import { useGetCount } from "../../../Hooks/Query/Admin.Query";

type Props = {
  rep: any;
};

function TodoCreationReportCard({ rep }: Props) {
  return (
    <div className="todoItem ReportCard">
      {rep.name}
      <br /> ({rep.email})
      <div className="itemDesc">
        <div className="itemContent">{rep.todoTitle}</div>
        <div className="itemDate">{rep.Deadline}</div>
        <div className="itemDate">{rep.tag}</div>
      </div>
    </div>
  );
}

export default TodoCreationReportCard;
