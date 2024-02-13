"use client";
import { useState } from "react";

const colors = [
  { id: 1, code: "#4169e1" },
  { id: 2, code: "#66B95C" },
  { id: 3, code: "#ff9800" },
  { id: 4, code: "#ff5e94" },
  { id: 5, code: "#fa5b0f" },
  { id: 6, code: "#f39977" },
  { id: 7, code: "#9200ee" },
  { id: 8, code: "#00D4BD" },
  { id: 9, code: "#5e9e9f" },
  { id: 10, code: "#EB4A4C" },
  { id: 11, code: "#666d41" },
  { id: 12, code: "#fe0000" },
];

const Settings = () => {
  const [toggle, setToggle] = useState(false);
  const [cursor, setCursor] = useState(1);

  const onClick = (value) => {
    setCursor(value);
    document
      .querySelector(".kura_tm_all_wrap")
      .setAttribute("data-magic-cursor", value === 1 ? "show" : "hide");
  };

  return (
    <div className={`kura_tm_settings ${toggle ? "opened" : ""}`}>
      <div className="icon">
        <img className="svg" src="assets/img/svg/setting.svg" alt="" />
        <a
          className="link"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setToggle(!toggle);
          }}
        />
      </div>
      <div className="wrapper">
        <span className="title">Unlimited Colors</span>
        <ul className="colors">
          {colors.map((color) => (
            <li key={color.id}>
              <a
                href="#"
                data-color={color.code}
                style={{ backgroundColor: color.code, margin: `0 2.5px` }}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector(":root")
                    .style.setProperty("--secondary-color", color.code);
                }}
              />
            </li>
          ))}
        </ul>
        {/* <span className="title">Magic Cursor</span>
        <ul className="cursor">
          <li>
            <a
              className={`${cursor === 1 ? "showme show" : "hidden"}`}
              onClick={(e) => {
                e.preventDefault();
                onClick(1);
              }}
              href="#"
            />
          </li>
          <li>
            <a
              className={`${cursor === 2 ? "showme show" : "hide"}`}
              onClick={(e) => {
                e.preventDefault();
                onClick(2);
              }}
              href="#"
            >
              <img className="svg" src="assets/img/svg/arrow.svg" alt="" />
            </a>
          </li>
        </ul> */}
      </div>
    </div>
  );
};
export default Settings;
