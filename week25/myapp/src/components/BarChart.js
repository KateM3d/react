import React from "react";
import { Pie } from "react-chartjs-2";

const data = {
  labels: ["Chinese", "English", "French", "Spanish"],
  datasets: [
    {
      label: "# of Votes",
      data: [15, 12, 3, 5],
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

const PieChart = () => (
  <>
    <div className="header">
      <h1 className="title"> Pie Chart </h1>{" "}
    </div>
    <div className="dataChart">
      {" "}
      <Pie data={data} />
    </div>{" "}
  </>
);

export default PieChart;
