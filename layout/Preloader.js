"use client";
import { kuraUtilit } from "@/utility";
import { useEffect } from "react";

const Preloader = () => {
  useEffect(() => {
    kuraUtilit.preloader();
  }, []);

  return (
    <div id="preloader">
      <div className="loader_line" />
    </div>
  );
};
export default Preloader;
