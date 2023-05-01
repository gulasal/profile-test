import React from "react";
import { Card, Row, Col, Button, Text, Container } from "@nextui-org/react";

const containerStyles = {
  width: "15.5rem",
  height: "25.5rem",
  padding: "1.5rem 1.3rem",
  backgroundColor: "#FAFAFA",
  borderRadius: "2.5rem",
  mixBlendMode: "normal",
  boxShadow: "0px 1px 100px 10px rgba(0, 0, 0, 0.15)",
};

const cardFooterStyles = {
  position: "absolute",
  bgBlur: "#ffffff66",
  borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
  bottom: 0,
  zIndex: 1,
};

function CardComp({ firstName, lastName, image, handleImageUpload }) {
  return (
    <Container css={containerStyles}>
      <Card css={{ w: "13rem", h: "16.75rem" }}>
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            src={image}
            height="100%"
            objectFit="cover"
            alt="Card example background"
          />
        </Card.Body>
        <Card.Footer isBlurred css={cardFooterStyles}>
          <Row justify="center">
            <Button
              flat
              auto
              rounded
              css={{ backgroundColor: "#E0FF00" }}
              onPress={() => {
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
              onChange={handleImageUpload}
            />
          </Row>
        </Card.Footer>
      </Card>
      <Container css={{ marginTop: "1rem" }}>
        <Col css={{ lineHeight: "3px" }}>
          <Row justify="center">
            <Text h4 size={18}>
              {firstName} {lastName}
            </Text>
          </Row>
          <Row justify="center">
            <Text h6 size={14} css={{ marginTop: "1rem" }}>
              BesteFirma GmbH
            </Text>
          </Row>
        </Col>
      </Container>
    </Container>
  );
}

export default CardComp;
