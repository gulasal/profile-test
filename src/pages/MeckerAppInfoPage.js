import React from "react";
import MeckerApp from "../components/MeckerAppInformation/MeckerApp";
import backgroundImage from "../assets/BlurredImage.webp";

const MeckerAppInfoPage = () => {
  return (
    <div
      style={{
        background: `url(${backgroundImage}) no-repeat fixed center`,
        padding: "1rem 10%",
        height: "100%",
      }}
    >
      <MeckerApp />
    </div>
  );
};

export default MeckerAppInfoPage;
