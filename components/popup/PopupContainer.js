"use client";
import { context } from "@/context/context";
import { kuraUtilit } from "@/utility";
import useClickOutside from "@/utility/useClickOutside";
import { useContext, useEffect } from "react";

const PopContainer = ({ children, nullValue }) => {
  useEffect(() => {
    kuraUtilit.dataImage();
    kuraUtilit.imgToSVG();
  }, []);

  const { modalToggle, modal } = useContext(context);
  let domNode = useClickOutside(() => {
    modalToggle(false);
    nullValue(null);
  });
  return (
    <div className={`kura_tm_modalbox ${modal ? "opened" : ""}`}>
      <div className="box_inner" ref={domNode}>
        <div className="close">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              modalToggle(false);
              nullValue(null);
            }}
          >
            <img class="svg" src="assets/img/svg/cancel.svg" alt="" />
          </a>
        </div>
        <div className="description_wrap">{children}</div>
      </div>
    </div>
  );
};
export default PopContainer;
