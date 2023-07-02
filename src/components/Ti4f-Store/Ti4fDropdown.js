import React, { useState, useMemo } from "react";
import { Dropdown } from "@nextui-org/react";
import "./Ti4fStore.css";

const Ti4fDropdown = ({ selected1, selected2, setSelected1, setSelected2 }) => {
  const selected1Value = useMemo(
    () => Array.from(selected1).join(", ").replaceAll("_", " "),
    [selected1]
  );
  const selected2Value = useMemo(
    () => Array.from(selected2).join(", ").replaceAll("_", " "),
    [selected2]
  );

  const handleSelection1Change = (selectedItems) => {
    setSelected1(selectedItems);
  };

  const handleSelection2Change = (selectedItems) => {
    setSelected2(selectedItems);
  };

  //   const handleSelection1Change = (selectedItems) => {
  //     setSelected1(selectedItems);
  //     setSelected1Value(
  //       Array.from(selectedItems).join(", ").replaceAll("_", " ")
  //     );
  //   };
  //   const handleSelection2Change = (selectedItems) => {
  //     setSelected2(selectedItems);
  //     setSelected2Value(
  //       Array.from(selectedItems).join(", ").replaceAll("_", " ")
  //     );
  //   };

  return (
    <div style={{ display: "flex" }} className="dropdown-container">
      <Dropdown>
        <Dropdown.Button flat color="success" className="dropdown-button">
          {selected1Value || "Kategorie"}
        </Dropdown.Button>
        <Dropdown.Menu
          aria-label="Single selection actions"
          color="success"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={selected1}
          onSelectionChange={handleSelection1Change}
        >
          <Dropdown.Item key="Projectmanagement">
            Projectmanagement
          </Dropdown.Item>
          <Dropdown.Item key="Produktivität">Produktivität</Dropdown.Item>
          <Dropdown.Item key="Fehlermanagement">Fehlermanagement</Dropdown.Item>
          <Dropdown.Item key="Durchgängigkeit">Durchgängigkeit</Dropdown.Item>
          <Dropdown.Item key="Farben">Farben</Dropdown.Item>
          <Dropdown.Item key="Fertigung">Fertigung</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Button flat color="success" className="dropdown-button">
          {selected2Value || "Hersteller"}
        </Dropdown.Button>
        <Dropdown.Menu
          aria-label="Single selection actions"
          color="success"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={selected2}
          onSelectionChange={handleSelection2Change}
        >
          <Dropdown.Item key="Ti4f">Ti4f</Dropdown.Item>
          <Dropdown.Item key="AnotherCompany">Another Company</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Ti4fDropdown;
