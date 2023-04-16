import React from "react";
import { Input, Container, Button, Row, Col } from "@nextui-org/react";

function RegistrationForm() {
  const text = "Ihre personlichen Informationen";
  return (
    <Container
      style={{
        height: "13.5rem",
        width: "54rem",
        backgroundColor: "#FAFAFA",
        borderRadius: "40px",
        mixBlendMode: "normal",
        boxShadow: "0px 1px 100px 10px rgba(0, 0, 0, 0.15)",
        marginTop: "1rem",
      }}
    >
      <Row justify="center" css={{ paddingTop: "1.5rem" }}>
        {text}
      </Row>
      <Row>
        <Col
          xs="6"
          css={{
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
            padding: "0 1.65rem 0 0",
            justifyContent: "flex-start",
          }}
        >
          <Input.Password
            clearable
            bordered
            color="#000728"
            initialValue="123"
            helperText="Insecure password"
            type="password"
            label="Password"
            placeholder="Enter your password with eye"
          />
        </Col>
        <Col
          xs="6"
          css={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            padding: "0 0 0 1.65rem",
            justifyContent: "flex-start",
          }}
        >
          <Input.Password
            clearable
            color="#000728"
            bordered
            initialValue="123"
            helperText="Insecure password"
            type="password"
            label="Password"
            placeholder="Enter your password with eye"
          />
        </Col>
      </Row>
      <Row
        justify="center"
        css={{ marginTop: "2rem", justifyContent: "center" }}
      >
        <Button
          color="#E0FF03"
          auto
          css={{ width: "200px", backgroundColor: "#E0FF03" }}
        >
          Submit
        </Button>
      </Row>
    </Container>
  );
}

export default RegistrationForm;
