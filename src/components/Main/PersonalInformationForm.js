import React from "react";
import { Container, Col, Row, Dropdown, Input, Text } from "@nextui-org/react";

function PersonalInformationForm() {
  const AcademicTitle = ({ text }) => {
    const personalInformation = "Personal Information";
    return (
      <Container css={{border:"1px solid grey",borderRadius:"10px", height:"50%", marginRight: " 1rem"}}>
        <Row>
          <Text h5>{personalInformation}</Text>
        </Row>
        <Row gap={3}>
          <Col>
          <p>Akademischer Titel</p>
            <Dropdown labelPlaceholder="Akademischer Titel" css={{ marginTop: "2rem" }}>
              <Dropdown.Button flat>Akademischer Titel</Dropdown.Button>
              <Dropdown.Menu aria-label="Static Actions">
                <Dropdown.Item key="new">Student</Dropdown.Item>
                <Dropdown.Item key="copy">Pr</Dropdown.Item>
                <Dropdown.Item key="edit">Dr</Dropdown.Item>
                <Dropdown.Item key="delete" color="error">
                  Delete file
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Input
              css={{ marginTop: "2rem", marginBottom: "2rem" }}
              style={{ marginTop: "$5px" }}
              clearable
              bordered
              labelPlaceholder="Vorname"
              initialValue="Vorname"
            />
            <p>Geschlecht</p>
            <Dropdown css={{ marginTop: "20px" }}>
              <Dropdown.Button flat>Geschlecht</Dropdown.Button>
              <Dropdown.Menu aria-label="Static Actions">
                <Dropdown.Item key="new">Man</Dropdown.Item>
                <Dropdown.Item key="copy">Woman</Dropdown.Item>
                <Dropdown.Item key="edit">N/A</Dropdown.Item>
                <Dropdown.Item key="delete" color="error">
                  Delete file
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col>
          <p>Sprache</p>
            <Dropdown labeled  label="Sprache" css={{ marginTop: "2rem" }}>
              <Dropdown.Button flat>Sprache</Dropdown.Button>
              <Dropdown.Menu aria-label="Static Actions">
                <Dropdown.Item key="new">Deutch</Dropdown.Item>
                <Dropdown.Item key="copy">English</Dropdown.Item>
                <Dropdown.Item key="delete" color="error">
                  Delete file
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Input
              css={{ marginTop: "2rem" }}
              style={{ marginTop: "$5px" }}
              clearable
              bordered
              labelPlaceholder="Nachname"
              initialValue="Nachname"
            />
            <Input
              css={{ marginTop: "2rem" }}
              style={{ marginTop: "$5px" }}
              clearable
              bordered
              labelPlaceholder="Telefonnummer"
              initialValue="Telefonnummer"
            />
          </Col>
        </Row>
      </Container>
    );
  };
  return <AcademicTitle />;
}

export default PersonalInformationForm;
