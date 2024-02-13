"use client";
import { kuraUtilit } from "@/utility";
import { Fragment, useEffect } from "react";
const Cursor = () => {
  useEffect(() => {
    kuraUtilit.customCursor();
  }, []);

  return (
    <Fragment>
      {/* <div className="mouse-cursor cursor-outer" />
      <div className="mouse-cursor cursor-inner" /> */}
    </Fragment>
  );
};
export default Cursor;
