import React from "react";
import Ti4fStore from "../components/Ti4f-Store/TiefStore";
import backgroundImage from "../assets/BlurredImage.webp";

const Ti4fStorePage = ({
  filteredData,
  setFilteredData,
  inputValue,
  setInputValue,
  data,
  handleInputChange,
}) => {
  return (
    <div
      style={{
        background: `url(${backgroundImage}) no-repeat fixed center`,
        width: "100%",
        height: "100%",
        padding: "1% 10%",
      }}
    >
      <Ti4fStore
        filteredData={filteredData}
        setFilteredData={setFilteredData}
        inputValue={inputValue}
        setInputValue={setInputValue}
        data={data}
        handleInputChange={handleInputChange}
      />
    </div>
  );
};

export default Ti4fStorePage;
