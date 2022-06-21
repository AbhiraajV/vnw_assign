import React, { useEffect, useState } from "react";
import { useGetCount, useGetReport } from "../../Hooks/Query/Admin.Query";
import TodoCreationReportCard from "./Helper/TodoCreationReportCard";
import "./Helper/index.css";
import LoginAsAdmin from "./Helper/LoginAsAdmin";
import Plot from "./Helper/Plot/Plot";
import PlotFunctions from "./Helper/Plot/Functions";
type Props = {};

function AdminReportPage({}: Props) {
  const [report, setReport] = useState([]);
  var res = useGetReport();
  const plotFunctions = new PlotFunctions(res);
  plotFunctions.FormDateWise();
  plotFunctions.FormTagWise(res);
  useEffect(() => {
    console.log({ res });
    if (res && res.length > 0) setReport(res);
  }, [res]);

  const counter = useGetCount();
  console.log({ counter });
  if (!localStorage.getItem("admin")) return <LoginAsAdmin />;
  return (
    <div className="AdminPage">
      <div>
        {counter && counter.length > 0 && (
          <div className="Weekly">
            This week <div className="this">{counter[0].total}</div>
            <div className="lastweek">
              while last week we had {counter[0].lastWeek}
            </div>
          </div>
        )}
        <div className="ReportHolder">
          <div className="curTypeTitle">Tasks</div>
          {report.length > 0 &&
            report.map((rep: any, index: any) => (
              <TodoCreationReportCard rep={rep} key={index} />
            ))}
        </div>
      </div>

      <Plot plotFunctions={plotFunctions} />
    </div>
  );
}

export default AdminReportPage;
