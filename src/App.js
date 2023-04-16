import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import NavbarComponent from "./components/Navbar";
import MainWrapper from "./components/MainWrapper";
import "./App.css";

function App() {
  return (
    <NextUIProvider css={{}}>
      <NavbarComponent />
      <MainWrapper />
    </NextUIProvider>
  );
}

export default App;
