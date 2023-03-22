import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import NavbarComponent from "./components/Navbar/Navbar";
import MainWrapper from "./components/Main/MainWrapper";

function App() {
  return (
    <NextUIProvider>
      <NavbarComponent />
      <MainWrapper/>
    </NextUIProvider>
  );
}

export default App;
