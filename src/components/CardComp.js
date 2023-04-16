import { Card, Row, Col, Button, Text, Container } from "@nextui-org/react";
import Image from "../assets/man.avif";

const CardComp = () => {
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
            src={Image}
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
            <Button flat auto rounded color="secondary">
              <Text
                css={{ color: "inherit" }}
                size={12}
                weight="bold"
                transform="uppercase"
              >
                Notify Me
              </Text>
            </Button>
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
};

export default CardComp;
