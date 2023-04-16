import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import NavbarComponent from "./components/Navbar/Navbar";
import MainWrapper from "./components/Main/MainWrapper";
import "./App.css"

function App() {
  return (
    <NextUIProvider css={{ }}>
      <NavbarComponent />
      <MainWrapper/>
    </NextUIProvider>
  );
}

export default App;
