import React, { useState } from "react";
import { Col } from "@nextui-org/react";
import Screenshots from "./Screenshots";
import SideBar from "./Sidebar";
import AdditionalInfo from "./AdditionalInfo";

const MeckerApp = () => {
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        borderRadius: "12px",
        backgroundColor: "#e6e7e7",
        padding: "1rem 2rem 1rem 1rem",
      }}
    >
      <SideBar />
      <Col>
        <Screenshots
          showPopup={showPopup}
          setShowPopup={setShowPopup}
          togglePopup={togglePopup}
        />
        <AdditionalInfo />
      </Col>
    </div>
  );
};

export default MeckerApp;
