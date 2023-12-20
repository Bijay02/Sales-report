import React, { useState } from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const BarChart = ({ parsedCSVData }) => {
  const months = parsedCSVData.map((row) => row.Month);
  const earnings = parsedCSVData.map((row) => row.Earning);
  const data = {
    labels: months,
    datasets: [
      {
        label: "Monthly Earning",
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
        backgroundColor: "rgb(255, 99, 132)",
        data: earnings,
      },
    ],
  };
  return (
    <div style={{ width: "100%", height: "400px" }}>
      <Line data={data} />
    </div>
  );
};

export default BarChart;
