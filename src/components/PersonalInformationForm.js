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

function PersonalInformationForm({
  firstName,
  lastName,
  setFirstName,
  setLastName,
}) {
  const personalInformation = "Ihre persönlichen Informationen";

  const [selected, setSelected] = useState(new Set(["Student"]));
  const [tempFirstName, setTempFirstName] = useState(firstName);
  const [tempLastName, setTempLastName] = useState(lastName);
  const [gender, setGender] = useState(new Set(["Männlich"]));
  const [language, setLanguage] = useState(new Set(["Deutsch"]));
  const [phoneNumber, setPhoneNumber] = useState("+49 170 5879634");

  const selectedValueAkademischeTitle = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );
  const selectedValueGender = React.useMemo(
    () => Array.from(gender).join(", ").replaceAll("_", " "),
    [gender]
  );
  const selectedValueLanguage = React.useMemo(
    () => Array.from(language).join(",").replaceAll("_", " "),
    [language]
  );

  const saveData = () => {
    const data = {
      firstName: tempFirstName,
      lastName: tempLastName,
      gender,
      language,
      phoneNumber,
    };

    localStorage.setItem("personalData", JSON.stringify(data));
    console.log("selected");
  };

  const handleDropdownChange = (selectedOptions) => {
    console.log("handleDropdownChange", selectedOptions);
  };

  return (
    //Main Container
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
            <label
              htmlFor="akademischerTitel"
              id="akademischerTitel"
              style={{ fontSize: "0.8rem" }}
            >
              Akademischer Title
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
                {selectedValueAkademischeTitle}
              </Dropdown.Button>
              <Dropdown.Menu
                aria-label="Single selection actions"
                color="secondary"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selected}
                onSelectionChange={setSelected}
              >
                <Dropdown.Item key="Student">Student</Dropdown.Item>
                <Dropdown.Item key="Pr">Pr</Dropdown.Item>
                <Dropdown.Item key="Dr">Dr</Dropdown.Item>
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
            <label htmlFor="geschlecht" style={{ fontSize: "0.8rem" }}>
              Geschlecht
            </label>
            <Dropdown>
              <Dropdown.Button
                auto
                color="none"
                helpertext="Required"
                css={{
                  width: "100%",
                  border: "solid 2px #000728",
                  backgroundColor: "#FAFAFA",
                  helpertext: "Required",
                }}
              >
                {selectedValueGender}
              </Dropdown.Button>
              <Dropdown.Menu
                aria-label="Single selection actions"
                color="secondary"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={gender}
                onSelectionChange={setGender}
              >
                <Dropdown.Item key="Man">Man</Dropdown.Item>
                <Dropdown.Item key="Woman">Woman</Dropdown.Item>
                <Dropdown.Item key="N/A">N/A</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <label htmlFor="required" style={{ fontSize: "0.8rem" }}>
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
            <label htmlFor="sprache" style={{ fontSize: "0.8rem" }}>
              Sprache
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
                {selectedValueLanguage}
              </Dropdown.Button>
              <Dropdown.Menu
                aria-label="Single selection actions"
                color="secondary"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={language}
                onSelectionChange={setLanguage}
              >
                <Dropdown.Item key="Deutch">Deutch</Dropdown.Item>
                <Dropdown.Item key="English">English</Dropdown.Item>
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
              onChange={(e) => setPhoneNumber(e.target.value)}
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
          onPress={() => {
            setFirstName(tempFirstName);
            setLastName(tempLastName);
            saveData();
            console.log("locally saved");
          }}
          onChange={handleDropdownChange}
        >
          speichern
        </Button>
      </Row>
    </Container>
  );
}

export default PersonalInformationForm;
