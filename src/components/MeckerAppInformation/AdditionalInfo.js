import React from "react";
import { Col, Text } from "@nextui-org/react";
const AdditionalInfo = () => {
  return (
    <div
      style={{
        width: "54rem",
        padding: "1rem 2rem",
        borderRadius: "12px",
        backgroundColor: "#FFFFFF",
        height: "28%",
        marginTop: "1rem",
      }}
    >
      <Col>
        <Text css={{ fontSize: "20px", marginBottom: "1rem" }}>
          Beschreibung
        </Text>
        <Text css={{ fontSize: "16px" }}>
          "Mit dieser Anwendung schaffen Sie in Ihrer Firma eine Möglichkeiten
          Probleme und mögliche FehlerAufzudecken und diese Systematisiert zu
          dokumentieren. Ein weiteres Feature ist die Problemlösungsfindung.
          Aber genug erklärt, lass uns loslegen!",
        </Text>
      </Col>
    </div>
  );
};

export default AdditionalInfo;
