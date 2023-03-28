import React from "react";
import { Grid } from "@nextui-org/react";
import "./MainPart.css";
import CardComp from "./CardComp";
import PersonalInformationForm from "./PersonalInformationForm";

function MainPart() {
  return (
    <Grid.Container justify="center" gap={1}>
      <Grid xs={3}>
        <CardComp />
      </Grid>
      <Grid xs={9}>
        <PersonalInformationForm />
      </Grid>
    </Grid.Container>
  );
}

export default MainPart;
