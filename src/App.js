import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import NavbarComponent from "./components/Navbar";

function App() {
  return (
    <NextUIProvider>
      <NavbarComponent />
    </NextUIProvider>
  );
}

export default App;
