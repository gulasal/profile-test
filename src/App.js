import React, { useState, Suspense } from "react";
import { NextUIProvider } from "@nextui-org/react";
import NavbarComponent from "./components/Navbar/Navbar";
import profilePic from "./assets/BGImage.jpeg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PersonalInformationPage from "./pages/PersonalInformationPage";
import Ti4fStorePage from "./pages/Ti4fStorePage";
import "./App.css";
import MeckerAppInfoPage from "./pages/MeckerAppInfoPage";

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
    <BrowserRouter>
      <Suspense fallback={null}>
        <NextUIProvider>
          <Routes>
            <Route
              path="/"
              exact
              element={
                <>
                  <NavbarComponent
                    image={image}
                    firstName={firstName}
                    lastName={lastName}
                  />
                  <PersonalInformationPage
                    image={image}
                    handleImageUpload={handleImageUpload}
                    firstName={firstName}
                    lastName={lastName}
                    setFirstName={setFirstName}
                    setLastName={setLastName}
                  />
                </>
              }
            />
            <Route
              path="/ti4f-store"
              exact
              element={
                <>
                  <NavbarComponent
                    image={image}
                    firstName={firstName}
                    lastName={lastName}
                  />
                  <Ti4fStorePage />
                </>
              }
            />
            <Route
              path="/mecker-app"
              exact
              element={
                <>
                  <NavbarComponent
                    image={image}
                    firstName={firstName}
                    lastName={lastName}
                  />
                  <MeckerAppInfoPage />
                </>
              }
            />
          </Routes>
        </NextUIProvider>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
