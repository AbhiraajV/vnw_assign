import { enGB } from "date-fns/locale";
import "chartjs-adapter-date-fns";
export default class PlotFunctions {
  tagWise: any[] | undefined;
  constructor(private data: any) {
    this.data = data;
  }
  FormTagWise = (data: any) => {
    var temp: { [k: string]: number } = {};
    for (var i in data) {
      console.log({ cur, temp });
      var cur = data[i].tag;
      if (cur in temp) temp[cur] += 1;
      else temp[cur] = 1;
    }

    var setData: any[] = [];
    for (var key in temp) setData.push(temp[key]);
    console.log({ setData });
    this.tagWise = setData;
  };
  FormDateWise = () => {
    var temp: { [k: string]: number } = {};
    for (var i in this.data) {
      var cur = this.data[i].Deadline;
      if (cur in temp) temp[cur] += 1;
      else temp[cur] = 1;
    }

    var setData: [{ [k: string]: number | string }] = [{}];
    for (var key in temp) {
      setData.push({ x: key, y: temp[key] });
    }
    this.data = setData;
  };
  ReturnDataSetTagWise = (): any => {
    return {
      labels: ["Personal", "Home", "Travel"],
      datasets: [
        {
          label: "# of Votes",
          data: this.tagWise,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };
  };
  ReturnDataSet = () => {
    return {
      datasets: [
        {
          label: "Tasks Set",
          data: this.data,
          borderColor: "#FFCE0E",
          backgroundColor: ["#FFCE0E", "black", "red", "green"],
          borderDash: [3],
        },
      ],
    };
  };
}
export const options = {
  animation: false,
  spanGaps: true,
  responsive: true,
  scales: {
    y: {
      title: {
        display: true,
        text: "Tasks",
      },
    },
    x: {
      adapters: {
        date: {
          locale: enGB,
        },
      },
      type: "time",
      distribution: "linear",
      time: {
        parser: "dd-MM-yyyy",
        unit: "month",
      },
      title: {
        display: true,
        text: "Date",
      },
    },
  },
  plugins: {
    legend: { position: "top" },
    title: {
      display: true,
      text: "Tasks v/s Date of Completion",
    },
  },
};
