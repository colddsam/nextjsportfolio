"use client";
import React, { useState } from "react";
import { MultiStepLoader as Loader } from "@/components/multi-step-loader";

const loadingStates = [
  {
    text: "Imported Introduction",
  },
  {
    text: "SVG Imported",
  },
  {
    text: "Skills Section Pinned",
  },
  {
    text: "Parallex Effect Created",
  },
  {
    text: "Project Section Loaded",
  },
  {
    text: "Achievement Accomplished",
  },
  {
    text: "Created Github Globe",
  },
  {
    text: "Feedback Channel Started",
  },
  {
    text: "All Effect Reviewed",
  },
  {
    text: "Final Effects Spreading...",
  }
];

export default function MultiStepLoaderDemo() {
  const [loading, setLoading] = useState(true);
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Loader loadingStates={loadingStates} loop={false} loading={loading} duration={2000}/>
    </div>
  );
}
