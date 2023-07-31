import React from "react";
import type { Metadata } from "next";
import CollegeDataTable from "../components/datables/CollegeDatatable";

const metadata: Metadata = {
  title: "Top Colleges",
  description: "All TopColleges From India",
};
const TopColleges = () => {
  return <div className="topcolleges h-full">
    <CollegeDataTable/>
  </div>;
};

export default TopColleges;
