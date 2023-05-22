import React, { useState, Suspense } from "react";
import { NextUIProvider } from "@nextui-org/react";
import NavbarComponent from "./components/Navbar";
import MainWrapper from "./components/MainWrapper";
import profilePic from "./assets/BGImage.jpeg";
import "./App.css";

function App(props) {
  //translation
  const [image, setImage] = useState(profilePic);
  const [firstName, setFirstName] = useState("Tomas");
  const [lastName, setLastName] = useState("Brunner");

  //edit image in Cardcomp and Navbar
  const handleImageUpload = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <Suspense fallback={null}>
      <NextUIProvider>
        <NavbarComponent
          image={image}
          firstName={firstName}
          lastName={lastName}
        />
        <MainWrapper
          image={image}
          handleImageUpload={handleImageUpload}
          firstName={firstName}
          lastName={lastName}
          setFirstName={setFirstName}
          setLastName={setLastName}
        />
      </NextUIProvider>
    </Suspense>
  );
}

export default App;
