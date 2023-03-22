import React from "react";
import { Button } from "@nextui-org/react";
import { MdKeyboardArrowRight } from "react-icons/md";
import "./SideBar.css";

function SideBar() {
  return (
    <div className="SideBar">
      <Button
        color="#E0FF03"
        css={{ width: "98%", backgroundColor: "#E0FF03", marginLeft: "3px" }}
      >
        Persönliche Informationen
        <MdKeyboardArrowRight />
      </Button>
    </div>
  );
}

export default SideBar;
