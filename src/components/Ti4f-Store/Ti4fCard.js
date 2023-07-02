import React, { useState } from "react";
import { Card, Image, Button, Row, Col } from "@nextui-org/react";
import "./Ti4fStore.css";
import mecker from "./images/MeckerApp.png";
import dashboarding from "./images/Screenshot 2023-07-02 at 10.14.57.png";

const Ti4fCard = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const data = [
    {
      id: 1,
      title: "Mecker App",
      company: "Ti4f GmbH",
      image: mecker,
      categories: "Projectmanagement , Produktivat, Fehlermanagement ",
      additional_title: "Beschreibung",
      additional:
        "Mit dieser Anwendung schaffen Sie in Ihrer Firma eine Möglichkeiten Probleme und mögliche FehlerAufzudecken und diese Systematisiert zu dokumentieren. Ein weiteres Feature ist die Problemlösungsfindung. Aber genug erklärt, lass uns loslegen!",
    },
    {
      id: 2,
      title: "Card 2",
      image: dashboarding,
      categories: "Category 2",
      additional_title: "Beschreibung",
      additional: "Additional Info 2",
    },
    {
      id: 2,
      title: "Card 2",
      image: dashboarding,
      categories: "Category 2",
      additional_title: "Beschreibung",
      additional: "Additional Info 2",
    },
    {
      id: 2,
      title: "Card 2",
      image: dashboarding,
      categories: "Category 2",
      additional_title: "Beschreibung",
      additional: "Additional Info 2",
    },
    {
      id: 2,
      title: "Card 2",
      image: dashboarding,
      categories: "Category 2",
      additional_title: "Beschreibung",
      additional: "Additional Info 2",
    },
  ];

  return (
    <div className="card-list">
      {data.map((item) => (
        <Col key={item.id} span={6}>
          <Card className="card">
            <Card.Body>
              <Row>
                <Col span={3}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    css={{ width: "2rem" }}
                  />
                </Col>
                <Col span={9} css={{ marginLeft: "1rem" }}>
                  <h3>{item.title}</h3>
                  <h6>{item.company}</h6>
                  <p>{item.categories}</p>{" "}
                  <Button color="primary" fullWidth>
                    Details
                  </Button>
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <div
                className={`additional-info ${
                  hoveredCard === item.id ? "visible" : ""
                }`}
              >
                <p>{item.additional_title}</p>
                <p>{item.additional}</p>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </div>
  );
};

export default Ti4fCard;
