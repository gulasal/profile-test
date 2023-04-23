import React, { useState } from "react";
import { NextUIProvider } from "@nextui-org/react";
import NavbarComponent from "./components/Navbar";
import MainWrapper from "./components/MainWrapper";
import profilePic from "./assets/BGImage.jpeg";
import "./App.css";

function App(props) {
  const [image, setImage] = useState(profilePic);
  const handleImageUpload = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <NextUIProvider>
      <NavbarComponent image={image} />
      <MainWrapper image={image} handleImageUpload={handleImageUpload} />
    </NextUIProvider>
  );
}

export default App;
