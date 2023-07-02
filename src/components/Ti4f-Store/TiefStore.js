import React, { useState } from "react";
import { Row } from "@nextui-org/react";
import Ti4fCard from "./Ti4fCard";
import Ti4fDropdown from "./Ti4fDropdown";
import SuchenInput from "./SuchenInput";
import "./Ti4fStore.css";

const TiefStore = () => {
  const [selected1, setSelected1] = useState("");
  const [selected2, setSelected2] = useState("");
  return (
    <div>
      <div className="kategorie-wrapper">
        <div style={{ height: "15%" }}>
          <Ti4fDropdown
            selected1={selected1}
            selected2={selected2}
            setSelected1={setSelected1}
            setSelected2={setSelected2}
          />
        </div>
        <div>
          {" "}
          <SuchenInput />{" "}
        </div>
      </div>
      <Row gap={1}>
        <Ti4fCard />
      </Row>
    </div>
  );
};

export default TiefStore;
