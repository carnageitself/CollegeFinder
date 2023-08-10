import React from "react";
import type { Metadata } from "next";
import AdmissionTimeline from "../components/timeline/AdmissionTimeline";

export const metadata: Metadata = {
  title: "Admission",
  description: "Admission in college details",
};

const Admission = () => {
  return <div className="admission h-full">
    <AdmissionTimeline/>
  </div>;
};

export default Admission;
