"use client";
import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../constants/collegedata";

interface College {
  id: number;
  ranking: string;
  colleges: string;
  img: string;
  ownership: string;
  location: string;
  email: string;
}

interface DataGridProps {
  className: string;
  rows: College[];
  columns: GridColDef[];
  pageSize: number;
  rowsPerPageOptions: number[];
  checkboxSelection: any;
}

const CollegeDataTable: React.FC = () => {
  const rows: College[] = userRows;
  const columns: GridColDef[] = userColumns;

  const dataGridProps: DataGridProps = {
    className: "datagrid",
    rows: rows,
    columns: columns,
    pageSize: 9,
    rowsPerPageOptions: [9],
    checkboxSelection: true,
  };

  return (
    <div className="datatable h-[80%] p-2 mx-10">
      <div className="datatableTitle w-[100%] mb-10 flex items-center justify-center mt-24 font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] text-transparent">
        Top Colleges in Mumbai
      </div>
      <DataGrid {...dataGridProps} />
    </div>
  );
};

export default CollegeDataTable;
