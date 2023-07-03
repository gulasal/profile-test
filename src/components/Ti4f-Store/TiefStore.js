import React, { useState } from "react";
import { Row } from "@nextui-org/react";
import Ti4fCard from "./Ti4fCard";
import Ti4fDropdown from "./Ti4fDropdown";
import SuchenInput from "./SuchenInput";
import "./Ti4fStore.css";
import mecker from "./images/MeckerApp.png";
import dashboarding from "./images/Screenshot 2023-07-02 at 10.14.57.png";
import digiTab from "./images/Card3.png";
import colorWizard from "./images/Card4.png";
import color2Wizard from "./images/Card5.png";

const TiefStore = () => {
  const [selected1, setSelected1] = useState("");
  const [selected2, setSelected2] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);

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

  const handleInputChange = (e) => {
    const value = e.target.value;

    const filtered = data.filter((item) => {
      return item.categories.some((category) =>
        category.toLowerCase().includes(value.toLowerCase())
      );
    });

    setFilteredData(filtered);
    setInputValue(value);
  };

  const filteredCards = inputValue ? filteredData : data;
  return (
    <div>
      <div className="kategorie-wrapper" style={{}}>
        <div style={{ height: "15%" }}>
          <Ti4fDropdown
            selected1={selected1}
            selected2={selected2}
            setSelected1={setSelected1}
            setSelected2={setSelected2}
          />
        </div>
        <div>
          {" "}
          <SuchenInput
            handleInputChange={handleInputChange}
            inputValue={inputValue}
          />{" "}
        </div>
      </div>
      <Row gap={1}>
        <Ti4fCard
          data={data}
          filteredData={filteredData}
          filteredCards={filteredCards}
        />
      </Row>
    </div>
  );
};

export default TiefStore;
