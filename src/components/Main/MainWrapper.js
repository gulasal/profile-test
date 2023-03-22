import React from "react";
import SideBar from "./SideBar";
import MainPart from "./MainPart";
import "./MainWrapper.css";

function MainWrapper() {
  return (
    <div className="MainWrapper">
      <SideBar />
      <MainPart />
    </div>
  );
}

export default MainWrapper;
