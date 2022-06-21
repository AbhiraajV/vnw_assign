// @ts-nocheck
import { enGB } from "date-fns/locale";
import React, { useEffect, useState } from "react";
import "chartjs-adapter-date-fns";
import { Bar, Line, Pie } from "react-chartjs-2";
import PlotFunctions, { options } from "./Functions";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
type Props = {
  plotFunctions: PlotFunctions;
};

function Plot({ plotFunctions }: Props) {
  const [data, setData] = useState();
  console.log({
    heree: plotFunctions.ReturnDataSet(),
  });
  const temp = plotFunctions.ReturnDataSet();
  const tagwise = plotFunctions.ReturnDataSetTagWise();

  return (
    <div className="plots">
      <Line height={400} width={600} data={temp} options={options} />
      <Pie height={400} width={600} data={tagwise} />
    </div>
  );
}

export default Plot;
