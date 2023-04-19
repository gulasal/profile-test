import React, { Component } from "react";
import { Card, Row, Col, Button, Text, Container } from "@nextui-org/react";
import Image from "../assets/man.avif";

class CardComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: Image,
    };
    this.handleImageUpload = this.handleImageUpload.bind(this);
  }
  handleImageUpload(e) {
    const reader = new FileReader();
    reader.onload = () => {
      this.setState({ image: reader.result });
    };
    reader.readAsDataURL(e.target.files[0]);
  }
  render() {
    return (
      <Container
        css={{
          width: "15.5rem",
          height: "25.5rem",
          padding: "1.5rem 1.3rem",
          backgroundColor: "#FAFAFA",
          borderRadius: "2.5rem",
          mixBlendMode: "normal",
          boxShadow: "0px 1px 100px 10px rgba(0, 0, 0, 0.15)",
        }}
      >
        <Card css={{ w: "13rem", h: "16.75rem" }}>
          <Card.Body css={{ p: 0 }}>
            <Card.Image
              src={this.state.image}
              height="100%"
              objectFit="cover"
              alt="Card example background"
            />
          </Card.Body>
          <Card.Footer
            isBlurred
            css={{
              position: "absolute",
              bgBlur: "#ffffff66",
              borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
              bottom: 0,
              zIndex: 1,
            }}
          >
            <Row justify="center">
              <Button
                flat
                auto
                rounded
                css={{ backgroundColor: "#E0FF00" }}
                onClick={() => {
                  document.querySelector("#image-upload").click();
                }}
              >
                <Text
                  css={{ color: "#000728" }}
                  size={14}
                  weight="normal"
                  transform="Capitalcase"
                >
                  Bild auswählen
                </Text>
              </Button>
              <input
                type="file"
                id="image-upload"
                accept=".jpg,.jpeg,.png,.gif"
                style={{ display: "none" }}
                onChange={this.handleImageUpload}
              />
            </Row>
          </Card.Footer>
        </Card>
        <Container css={{ marginTop: "1rem" }}>
          <Col css={{ lineHeight: "3px" }}>
            <Row justify="center">
              <Text h4 size={18}>
                Thomas Brunner
              </Text>
            </Row>
            <Row justify="center">
              <Text p size={14}>
                BesteFirma GmbH
              </Text>
            </Row>
          </Col>
        </Container>
      </Container>
    );
  }
}

export default CardComp;
