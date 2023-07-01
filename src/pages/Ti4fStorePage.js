import React from "react";
import Ti4fStore from "../components/Ti4f-Store/TiefStore";
import backgroundImage from "../assets/BlurredImage.webp";

const Ti4fStorePage = () => {
  return (
    <div
      style={{
        background: `url(${backgroundImage}) no-repeat fixed center`,
        width: "100%",
        height: "100%",
      }}
    >
      <Ti4fStore />
    </div>
  );
};

export default Ti4fStorePage;
