import React from 'react'
import { Dropdown } from "@nextui-org/react";


function DropDownMenu() {
    const [selectedColor, setSelectedColor] = React.useState("default");
  const colors = [
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "error",
  ];
  const capitalize = (str) => {
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div>
        <Dropdown>
            <Dropdown.Button color={selectedColor} light>
              Light
            </Dropdown.Button>
            <Dropdown.Menu
              color={selectedColor}
              variant="light"
              aria-label="Actions"
            >
              <Dropdown.Item key="new">New file</Dropdown.Item>
              <Dropdown.Item key="copy">Copy link</Dropdown.Item>
              <Dropdown.Item key="edit">Edit file</Dropdown.Item>
              <Dropdown.Item key="delete" color="error" withDivider>
                Delete file
              </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </div>
  )
}

export default DropDownMenu