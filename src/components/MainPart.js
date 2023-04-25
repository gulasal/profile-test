import React from "react";
import { Grid } from "@nextui-org/react";
import CardComp from "./CardComp";
import PersonalInformationForm from "./PersonalInformationForm";
import PassWordForm from "./PassWordForm";

const gridStyles = {
  display: "flex",
  flexDirection: "column",
  padding: "1rem 0",
};

function MainPart({
  image,
  handleImageUpload,
  firstName,
  lastName,
  setFirstName,
  setLastName,
}) {
  return (
    <Grid.Container justify="center">
      <Grid xs={3} css={{ padding: "1rem 0" }}>
        <CardComp
          image={image}
          handleImageUpload={handleImageUpload}
          firstName={firstName}
          lastName={lastName}
        />
      </Grid>
      <Grid xs={9} css={gridStyles}>
        <PersonalInformationForm
          firstName={firstName}
          lastName={lastName}
          setFirstName={setFirstName}
          setLastName={setLastName}
        />
        <PassWordForm />
      </Grid>
    </Grid.Container>
  );
}

export default MainPart;
