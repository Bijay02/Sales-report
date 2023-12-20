"use client";
import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import axios from "axios";
import BarChart from "../components/BarChart";
import DataTable from "../components/Table";
import Variance from "../components/Variance";
import StandardDeviation from "../components/StandardDeviation";

function FileUploadComponent() {
  const acceptableCSVFileTypes =
    ".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel";
  const [parsedCSVData, setParsedCSVData] = useState([]);
  const [variance, setVariance] = useState();
  const [standardDeviation, setStandardDeviation] = useState();

  const sendDataToServer = async (data) => {
    try {
      const response = await axios.post("http://localhost:5000/calculate", {
        data: data,
      });
      setVariance(response.data.variance);
      setStandardDeviation(response.data.standardDeviation);
      console.log("Response from server:", response.data);
    } catch (error) {
      console.error("Error sending data to server:", error);
    }
  };

  useEffect(() => {
    if (parsedCSVData.length > 0) {
      const earnings = parsedCSVData.map((row) => Number(row.Earning));
      console.log(earnings);
      sendDataToServer(earnings);
    }
  }, [parsedCSVData]);

  const onFileChangeHandler = (event) => {
    const csvFile = event.target.files[0];
    Papa.parse(csvFile, {
      skipEmptyLines: true,
      header: true,
      complete: function (results) {
        setParsedCSVData(results.data);
      },
    });
  };

  const showDataComponents = parsedCSVData.length > 0 && (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Variance variance={variance} />
        <StandardDeviation standardDeviation={standardDeviation} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <div className="bg-white">
          <h2 className="text-lg font-bold mb-2 text-center md:text-left">
            Monthlywise Earning Data
          </h2>
          <div className="overflow-x-auto shadow-md">
            <DataTable parsedCSVData={parsedCSVData} />
          </div>
        </div>
        <div className="bg-white">
          <h2 className="text-lg font-bold mb-2 text-center md:text-left">
            Sales Earning Statement
          </h2>
          <div className="flex justify-center md:justify-start shadow-md">
            <div style={{ width: "100%" }}>
              <BarChart parsedCSVData={parsedCSVData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto p-4 bg-gray-100">
      <p className="text-center text-gray-700 mb-4">
        Please upload the monthly-wise sales report in CSV format
      </p>
      <div className="h-16 w-full border border-gray-300 m-4">
        <label
          htmlFor="csvFileSelector"
          className="flex w-full h-full justify-center items-center text-gray-600"
        >
          Choose File (*csv, xls, etc.)
        </label>
        <input
          type="file"
          id="csvFileSelector"
          className="opacity-0 z-[-1] absolute"
          accept={acceptableCSVFileTypes}
          onChange={onFileChangeHandler}
        />
      </div>

      {showDataComponents}
    </div>
  );
}

export default FileUploadComponent;
