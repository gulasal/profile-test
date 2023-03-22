import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import NavbarComponent from "./components/Navbar";
import ImageEdit from "./components/ImageEdit"

function App() {
  return (
    <NextUIProvider>
      <NavbarComponent />
      <ImageEdit />
    </NextUIProvider>
  );
}

export default App;
