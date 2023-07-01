import React, { useState } from "react";
import { Input, Container, Button, Row, Col } from "@nextui-org/react";

function PasswordForm() {
  const text = "Passwort ändern";

  const [password, setPassword] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordChangeClick = () => {
    // Do something with the password value, e.g. save it to a database
    console.log("Password changed: ", password);

    // Implement database connection and query to save password here
    // const url = "your_database_url_here";
    // const data = { password: password };

    // fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("Success:", data);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
    //   console.log("Password changed: ", password);
  };

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
            helpertext="Insecure password"
            type="password"
            label="Password"
            placeholder="Enter your password with eye"
            value={password}
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
            helpertext="Insecure password"
            type="password"
            label="Password"
            placeholder="Enter your password with eye"
            value={password}
            onChange={handlePasswordChange}
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
          onClick={handlePasswordChangeClick}
        >
          Passwort ändern
        </Button>
      </Row>
    </Container>
  );
}

export default PasswordForm;
