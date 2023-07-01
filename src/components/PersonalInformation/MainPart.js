import React from "react";
import { Grid } from "@nextui-org/react";
import CardComp from "./CardComp";
import PersonalInformationForm from "./PersonalInformationForm";
import PassWordForm from "./PassWordForm";

const gridStyles = {
  display: "flex",
  flexDirection: "column",
  padding: "1rem 0",
  /* Small devices such as large phones (640px and up) */
  "@media only screen and (min-width: 40em)": {},

  /* Medium devices such as tablets (768px and up) */
  "@media only screen and (min-width: 48em)": {},

  /* Large devices such as laptops (1024px and up) */
  "@media only screen and (min-width: 64em)": {},

  /* Largest devices such as desktops (1280px and up) */
  "@media only screen and (min-width: 80em)": {},
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
