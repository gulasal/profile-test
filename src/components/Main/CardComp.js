import { Card, Row, Button, Text, Container } from "@nextui-org/react";

const CardComp = () => (
  <Container>
    <Card css={{ w: "100%", h: "300px" }}>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src="https://nextui.org/images/card-example-6.jpeg"
          width="100%"
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
  </Container>
);

export default CardComp;
