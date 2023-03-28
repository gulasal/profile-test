import React from "react";
import SideBar from "./SideBar";
import "./MainWrapper.css";
import { Grid } from "@nextui-org/react";
import MainPart from "./MainPart";

function MainWrapper() {
  return (
    <Grid.Container>
      <Grid xs={2.5}>
        <SideBar />
      </Grid>
      <Grid xs={9.5}>
       <MainPart/>
      </Grid>
    </Grid.Container>
  );
}

export default MainWrapper;
