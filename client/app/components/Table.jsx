import React from "react"
import { Table } from "antd";

export default function DataTable({ parsedCSVData }) {
  const dataSource = parsedCSVData.map((row, index) => ({
    ...row,
    key: index, 
  }));

  const columns = [
    {
      title: 'Month',
      dataIndex: 'Month',
      key: 'Month',
    },
    {
      title: 'Earning',
      dataIndex: 'Earning',
      key: 'Earning',
    },
  ];

  return (
    <div>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
}
