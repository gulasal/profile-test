import React from "react";
import SideBar from "./SideBar";
import { Grid } from "@nextui-org/react";
import MainPart from "./MainPart";
import backgroundImage from "../assets/BlurredImage.webp";

function MainWrapper() {
  return (
    <Grid.Container
      css={{ background: `url(${backgroundImage}) no-repeat fixed center` }}
    >
      <Grid>
        <SideBar />
      </Grid>
      <Grid xs={9.5} gap={3}>
        <MainPart />
      </Grid>
    </Grid.Container>
  );
}

export default MainWrapper;
