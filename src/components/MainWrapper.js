import React from "react";
import SideBar from "./SideBar";
import { Grid } from "@nextui-org/react";
import MainPart from "./MainPart";
import backgroundImage from "../assets/BlurredImage.webp";

function MainWrapper({
  image,
  firstName,
  lastName,
  setFirstName,
  setLastName,
  handleImageUpload,
}) {
  return (
    <Grid.Container
      css={{ background: `url(${backgroundImage}) no-repeat fixed center` }}
    >
      <Grid>
        <SideBar />
      </Grid>
      <Grid xs={9.5} gap={3}>
        <MainPart
          image={image}
          handleImageUpload={handleImageUpload}
          firstName={firstName}
          lastName={lastName}
          setFirstName={setFirstName}
          setLastName={setLastName}
        />
      </Grid>
    </Grid.Container>
  );
}

export default MainWrapper;
