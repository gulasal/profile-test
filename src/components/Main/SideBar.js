import React from "react";
import { Container, Row, Button } from "@nextui-org/react";
import { MdKeyboardArrowRight } from "react-icons/md";

function SideBar() {
  return (
    <Container
      css={{
        boxSizing: "border-box",
        width: "16.5rem",
        height: "47rem",
        padding: "0",
        background: "#fbfbfb",
        borderRight: "1px solid #efefef",
      }}
    >
      <Row css={{ padding: "0.3rem .5rem" }}>
        <Button
          color="#E0FF03"
          auto
          css={{
            width: "100%",
            backgroundColor: "#E0FF03",
            position: "relative",
          }}
        >
          <span style={{ position: "absolute", left: "1rem" }}>
            Persönliche Informationen
          </span>
          <MdKeyboardArrowRight
            style={{ position: "absolute", right: ".5rem" }}
          />
        </Button>
      </Row>
    </Container>
  );
}

export default SideBar;
