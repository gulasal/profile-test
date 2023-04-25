import React, { useState } from "react";
import {
  Container,
  Col,
  Row,
  Dropdown,
  Input,
  Text,
  Button,
} from "@nextui-org/react";

// (e) => setName(e.target.value);

function PersonalInformationForm({
  firstName,
  lastName,
  setFirstName,
  setLastName,
}) {
  const personalInformation = "Ihre persönlichen Informationen";

  const [academicTitle, setAcademicTitle] = useState("Ing.");
  const [tempFirstName, setTempFirstName] = useState(firstName);
  const [tempLastName, setTempLastName] = useState(lastName);
  const [gender, setGender] = useState("Männlich");
  const [language, setLanguage] = useState("Deutsch");

  const [phoneNumber, setPhoneNumber] = useState("+49 170 5879634");

  return (
    <Container
      css={{
        borderRadius: "40px",
        width: "54rem",
        height: "25.5rem",
        backgroundColor: "#FAFAFA",
        mixBlendMode: "normal",
        boxShadow: "0px 1px 100px 10px rgba(0, 0, 0, 0.15)",
        padding: "0",
      }}
    >
      <Row justify="center" css={{ marginTop: "1rem", marginBottom: "1rem" }}>
        <Text h5 css={{ display: "inline", margin: "0.5rem" }}>
          {personalInformation}
        </Text>
      </Row>
      <Row>
        <Col
          css={{
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
            padding: "0 1.65rem 0 0",
            justifyContent: "flex-start",
          }}
        >
          <Row
            css={{
              display: "flex",
              flexDirection: "column",
              width: "16.5rem",
            }}
          >
            <label for="akademischerTitel" style={{ fontSize: "0.8rem" }}>
              {academicTitle}
            </label>
            <Dropdown css={{ marginTop: "2rem" }}>
              <Dropdown.Button
                color="#000728"
                css={{
                  width: "100%",
                  border: "solid 2px #000728",
                  backgroundColor: "#FAFAFA",
                }}
              >
                {language}
              </Dropdown.Button>
              <Dropdown.Menu aria-label="Static Actions">
                <Dropdown.Item key="new">Student</Dropdown.Item>
                <Dropdown.Item key="copy">Pr</Dropdown.Item>
                <Dropdown.Item key="edit">Dr</Dropdown.Item>
                <Dropdown.Item key="delete" color="error">
                  Delete file
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Row>
          <Row css={{ width: "16.5rem" }}>
            <Input
              css={{
                marginTop: "2rem",
                width: "100%",
                border: "solid 2px #000728",
                backgroundColor: "#FAFAFA",
                fontSize: "0.8rem",
              }}
              animated={false}
              clearable
              labelPlaceholder="Vorname"
              initialValue={firstName}
              fontSize="0.8rem"
              onChange={(e) => setTempFirstName(e.target.value)}
            />
          </Row>
          <Row
            css={{
              display: "flex",
              flexDirection: "column",
              marginTop: "0.5rem",
              width: "16.5rem",
            }}
          >
            <label for="geschlecht" style={{ fontSize: "0.8rem" }}>
              {gender}
            </label>
            <Dropdown>
              <Dropdown.Button
                auto
                color="none"
                helperText="Required"
                css={{
                  width: "100%",
                  border: "solid 2px #000728",
                  backgroundColor: "#FAFAFA",
                  helperText: "Required",
                }}
              >
                Mannlich
              </Dropdown.Button>
              <Dropdown.Menu aria-label="Static Actions">
                <Dropdown.Item key="new">Man</Dropdown.Item>
                <Dropdown.Item key="copy">Woman</Dropdown.Item>
                <Dropdown.Item key="edit">N/A</Dropdown.Item>
                <Dropdown.Item key="delete" color="error">
                  Delete file
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <label for="required" style={{ fontSize: "0.8rem" }}>
              *Pflichtfelder
            </label>
          </Row>
        </Col>
        <Col
          css={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            padding: "0 0 0 1.65rem",
            justifyContent: "flex-start",
          }}
        >
          <Row
            css={{
              display: "flex",
              flexDirection: "column",
              width: "16.5rem",
            }}
          >
            <label for="sprache" style={{ fontSize: "0.8rem" }}>
              {language}
            </label>
            <Dropdown label="Name" css={{ marginTop: "2rem" }}>
              <Dropdown.Button
                auto
                color="none"
                css={{
                  width: "100%",
                  border: "solid 2px #000728",
                  backgroundColor: "#FAFAFA",
                }}
              >
                Deutsch
              </Dropdown.Button>
              <Dropdown.Menu aria-label="Static Actions">
                <Dropdown.Item key="new">Deutch</Dropdown.Item>
                <Dropdown.Item key="copy">English</Dropdown.Item>
                <Dropdown.Item key="delete" color="error">
                  Delete file
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Row>
          <Row css={{ width: "16.5rem" }}>
            <Input
              css={{
                marginTop: "2rem",
                width: "100%",
                border: "solid 2px #000728",
                backgroundColor: "#FAFAFA",
              }}
              animated={false}
              clearable
              labelPlaceholder="Nachname"
              initialValue={lastName}
              fontSize="0.8rem"
              onChange={(e) => setTempLastName(e.target.value)}
            />
          </Row>
          <Row css={{ width: "16.5rem", fontSize: "0.5rem" }}>
            <Input
              css={{
                marginTop: "2rem",
                width: "100%",
                backgroundColor: "#FAFAFA",
                border: "solid 2px #000728",
                fontSize: "10px",
              }}
              animated={false}
              color="#000728"
              clearable
              labelPlaceholder="Telefonnummer"
              initialValue={phoneNumber}
            />
          </Row>
        </Col>
      </Row>
      <Row justify="center" css={{ marginTop: "2rem" }}>
        <Button
          type="submit"
          color="#DEDBC6"
          auto
          css={{
            width: "200px",
            border: "solid 2px #B8B8B8",
            backgroundColor: "#FAFAFA",
          }}
          onClick={() => {
            setFirstName(tempFirstName);
            setLastName(tempLastName);
          }}
        >
          speichern
        </Button>
      </Row>
    </Container>
  );
}

export default PersonalInformationForm;
