import React, { useState } from "react";
import { Card, Image, Button, Row, Col } from "@nextui-org/react";
import { Link } from "react-router-dom";
import "./Ti4fStore.css";
import mecker from "./images/MeckerApp.png";
import dashboarding from "./images/Screenshot 2023-07-02 at 10.14.57.png";
import digiTab from "./images/Card3.png";
import colorWizard from "./images/Card4.png";
import color2Wizard from "./images/Card5.png";

const Ti4fCard = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const data = [
    {
      id: 1,
      title: "Mecker App",
      company: "Ti4f GmbH",
      image: mecker,
      categories: ["Projectmanagement", "Produktivat", "Fehlermanagement "],
      additional_title: "Beschreibung",
      additional:
        "Mit dieser Anwendung schaffen Sie in Ihrer Firma eine Möglichkeiten Probleme und mögliche FehlerAufzudecken und diese Systematisiert zu dokumentieren. Ein weiteres Feature ist die Problemlösungsfindung. Aber genug erklärt, lass uns loslegen!",
    },
    {
      id: 2,
      title: "Dashboarding",
      company: "Ti4f GmbH",
      image: dashboarding,
      categories: ["Kennzahlen", " Produktivität", "OEE", " Wertschöpfung"],
      additional_title: "Beschreibung",
      additional:
        "Die Dashboarding App von ti4f gibt dir den perfekten Überblick über deine Firma. Sie beinhaltet OEE Analysen, Wertschöpfungsbetrachtungen, sowie Kennzahlen über ihren kompletten Prozess.",
    },
    {
      id: 3,
      title: "DigiTab",
      company: "Ti4f GmbH",
      image: digiTab,
      categories: ["Durchgängikeit", "Farben", "Fertigung"],
      additional_title: "Beschreibung",
      additional:
        "Das DigitTab ist eine digitale Bibliothek für Toleranzen, Materialien und noch vielem mehr. Die Anwendung dieser Informationen erfolgt über eine patentierte Farbcodierung welche es ermöglicht Firmen übergreifend Informationen auszutauschen.",
    },

    {
      id: 4,
      title: "ColorWizzard",
      company: "ti4f GmbH",
      image: colorWizard,
      categories: ["Einfärben", "Farben", "Semantik"],
      additional_title: "Beschreibung",
      additional:
        "Der ti4f-ColorWizzard ist ein Rundumpaket für das Einfärben und Umfärben von Bauteilen. Sie ist die perfekte Ergänzung zu unsere Farbwelt.Die Anwendung erleichtert das Handling der Farben um ein vielfaches. Zusätzlich ist eine Funktion zur  Mittentoleranzberechnung integriert.",
    },
    {
      id: 5,
      title: "ColorWizzard",
      company: "ti4f GmbH",
      image: color2Wizard,
      categories: [" Einfärben", " Farben", "Semantik"],
      additional_title: "Beschreibung",
      additional:
        "Der ti4f-ColorWizzard ist ein Rundumpaket für das Einfärben und Umfärben von Bauteilen. Sie ist die perfekte Ergänzung zu unsere Farbwelt.Die Anwendung erleichtert das Handling der Farben um ein vielfaches. Zusätzlich ist eine Funktion zur  Mittentoleranzberechnung integriert.",
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

                  {Array.isArray(item.categories) && (
                    <div className="category-list">
                      {item.categories.map((category) => (
                        <div className="category" key={category}>
                          {category}
                        </div>
                      ))}
                    </div>
                  )}
                  <Link to="/mecker-app">
                    <Button className="card-button" fullWidth>
                      Details
                    </Button>
                  </Link>
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <div
                className={`additional-info ${
                  hoveredCard === item.id ? "visible" : ""
                }`}
              >
                <p className="info-title">{item.additional_title}</p>
                <p className="info">{item.additional}</p>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </div>
  );
};

export default Ti4fCard;
