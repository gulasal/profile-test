import React from "react";
import SideBar from "./SideBar";
import "./MainWrapper.css";
import { Grid } from "@nextui-org/react";
import MainPart from "./MainPart";

function MainWrapper() {
  return (
    <Grid.Container>
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
