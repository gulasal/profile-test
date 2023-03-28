import React from "react";
import { Button } from "@nextui-org/react";
import { MdKeyboardArrowRight } from "react-icons/md";
import "./SideBar.css";

function SideBar() {
  return (
    <div className="SideBar">
      <Button
        color="#E0FF03"
        auto
        css={{
          width: "100%",
          backgroundColor: "#E0FF03",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>Persönliche Informationen</span>
        <MdKeyboardArrowRight style={{}} />
      </Button>
    </div>
  );
}

export default SideBar;
