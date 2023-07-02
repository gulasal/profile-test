import React from "react";
import { Input } from "@nextui-org/react";
import { FiSearch } from "react-icons/fi";

import "react-toastify/dist/ReactToastify.css";

const SuchenInput = () => {
  return (
    <div style={{ position: "relative" }}>
      {" "}
      <Input css={{ width: "16em" }} />
      <FiSearch
        style={{
          position: "absolute",
          right: "1rem",
          top: "0.7rem",
        }}
      />
    </div>
  );
};

export default SuchenInput;
