// import React, { useState } from "react";
// import { Dropdown } from "@nextui-org/react";

// const Ti4fDropdown = ({ selected1, selected2, setSelected1, setSelected2 }) => {
//   const [selected1Value, setSelected1Value] = useState(
//     Array.from(selected1).join(", ").replaceAll("_", " ")
//   );
//   const [selected2Value, setSelected2Value] = useState(
//     Array.from(selected2).join(", ").replaceAll("_", " ")
//   );

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

//   return (
//     <div style={{ display: "flex" }}>
//       <Dropdown>
//         <Dropdown.Button
//           flat
//           color="success"
//           css={{
//             tt: "capitalize",
//             width: "258px",
//             marginRight: "1rem",
//             display: "flex",
//             justifyContent: "space-between",
//           }}
//         >
//           {selected1Value}
//         </Dropdown.Button>
//         <Dropdown.Menu
//           aria-label="Single selection actions"
//           color="secondary"
//           disallowEmptySelection
//           selectionMode="single"
//           selectedKeys={selected1}
//           onSelectionChange={handleSelection1Change}
//         >
//           <Dropdown.Item key="Kategorie">Kategorie</Dropdown.Item>
//           <Dropdown.Item key="Projectmanagement">
//             Projectmanagement
//           </Dropdown.Item>
//           <Dropdown.Item key="Produktivität">Produktivität</Dropdown.Item>
//           <Dropdown.Item key="Fehlermanagement">Fehlermanagement</Dropdown.Item>
//           <Dropdown.Item key="Durchgängigkeit">Durchgängigkeit</Dropdown.Item>
//           <Dropdown.Item key="Farben">Farben</Dropdown.Item>
//           <Dropdown.Item key="Fertigung">Fertigung</Dropdown.Item>
//         </Dropdown.Menu>
//       </Dropdown>
//       <Dropdown>
//         <Dropdown.Button
//           flat
//           color="success"
//           css={{
//             tt: "capitalize",
//             width: "258px",
//             marginRight: "1rem",
//             display: "flex",
//             justifyContent: "space-between",
//           }}
//         >
//           {selected2Value}
//         </Dropdown.Button>
//         <Dropdown.Menu
//           aria-label="Single selection actions"
//           color="success"
//           disallowEmptySelection
//           selectionMode="single"
//           selectedKeys={selected2}
//           onSelectionChange={handleSelection2Change}
//         >
//           <Dropdown.Item key="Hersteller">Hersteller</Dropdown.Item>
//           <Dropdown.Item key="text">Text</Dropdown.Item>
//           <Dropdown.Item key="number">Number</Dropdown.Item>
//           <Dropdown.Item key="date">Date</Dropdown.Item>
//           <Dropdown.Item key="single_date">Single Date</Dropdown.Item>
//           <Dropdown.Item key="iteration">Iteration</Dropdown.Item>
//         </Dropdown.Menu>
//       </Dropdown>
//     </div>
//   );
// };
// export default Ti4fDropdown;
