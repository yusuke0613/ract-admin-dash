import React, { useEffect, useState } from "react";
import { Bar } from "@reactchartjs/react-chart.js";
import "chartjs-plugin-datalabels";
import { Paper } from "@material-ui/core";
import { ResponsiveContainer } from "recharts";

const rand = () => Math.floor(Math.random() * 255);

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      type: "line",
      label: "成約率",
      borderColor: "#ffc107",
      borderWidth: 2,
      fill: false,
      data: [50, 60, 55, 40, 80, 10, 100],
      yAxisID: "y-axis-2", // 追加,
      options: {
        plugins: {
          datalabels: {
            //display: true,
            anchor: "end",
            align: "right",
            formatter(value) {
              if (value === null || value === 0) {
                return "";
              }
              return `${value}%`;
            },
          },
          maintainAspectRatio: false,
          responsive: false,
        },
      },
    },
    {
      type: "bar",
      label: "出現",
      backgroundColor: "#bdbdbd",
      data: [1000, 900, 600, 700, 400, 600, 470],
      yAxisID: "y-axis-1", // 追加
    },
    {
      type: "bar",
      label: "成約",
      backgroundColor: "#2979ff",
      data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
      yAxisID: "y-axis-1", // 追加
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        id: "y-axis-1", // Y軸のID
        type: "linear", // linear固定
        position: "left", // どちら側に表示される軸か？
        ticks: {
          // スケール
          max: 1000,
          min: 0,
          stepSize: 200,
        },
      },
      {
        id: "y-axis-2",
        type: "linear",
        position: "right",
        ticks: {
          max: 100,
          min: 0,
          stepSize: 20,
        },
      },
    ],
  },
};

const styles = {
  div: {
    height: 300,
    padding: "5px 15px 0 15px",
  },
  header: {
    fontSize: 24,
    fontWeight: 500, //typography.fontWeightLight,
    //color: white,
    //backgroundColor: purple600,
    padding: 10,
  },
};
const BorderLineChart: React.FC = () => {
  //const [data, setData] = useState(genData());

  useEffect(() => {
    //const interval = setInterval(() => setData(genData()), 5000);
    //return () => clearInterval(interval);
  }, []);

  return (
  <Paper style={styles.paper}>
  <span style={styles.title}>Website Analysis</span>

  <div style={styles.clear} />

  <div className="row">
    <div className="col-xs-12">
      <div style={styles.pieChartDiv}>
        <ResponsiveContainer>
        <Bar data={data} options={options} width={50} height={50} />
        </ResponsiveContainer>
      </div>
    </div>
  </div>
</Paper>
  );

export default BorderLineChart;
