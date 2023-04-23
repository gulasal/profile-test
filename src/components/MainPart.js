import React from "react";
import { Grid } from "@nextui-org/react";
import CardComp from "./CardComp";
import PersonalInformationForm from "./PersonalInformationForm";
import PassWordForm from "./PassWordForm";

function MainPart({ image, handleImageUpload }) {
  return (
    <Grid.Container justify="center">
      <Grid xs={3} css={{ padding: "1rem 0" }}>
        <CardComp image={image} handleImageUpload={handleImageUpload} />
      </Grid>
      <Grid
        xs={9}
        css={{ display: "flex", flexDirection: "column", padding: "1rem 0" }}
      >
        <PersonalInformationForm />
        <PassWordForm />
      </Grid>
    </Grid.Container>
  );
}

export default MainPart;
