import React, { useState } from "react";
import Modal from "react-modal";
import { Col, Image, Text, Button } from "@nextui-org/react";
import mecker from "../Ti4f-Store/images/MeckerApp.png";
import { AiOutlineAppstoreAdd, AiOutlineCopy } from "react-icons/ai";
import "./style.css";
import Logo from "./images/ti4f_logo_2_icon_verlauf_01.png";

const Sidebar = ({ showPopup, setShowPopup, togglePopup }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Text copied to clipboard");
      })
      .catch((error) => {
        alert("Error copying text to clipboard:", error);
      });
  };

  return (
    <div
      style={{
        width: "20rem",
        height: "100%",
        padding: "2rem 1rem",
        backgroundColor: "#FFFFFF",
        borderRadius: "12px",
        marginRight: "1rem",
      }}
    >
      <Col
        css={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <div>
          <Image width={150} css={{ borderRadius: "12px" }} src={mecker} />
          <Text h2>Mecker App</Text>
          <Text p css={{ marginBottom: "1rem" }}>
            ti4f GmbH
          </Text>
          <Text css={{ marginBottom: "4rem" }}>
            Projectmanagement, Produktivität, Fehlermanagement
          </Text>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          {" "}
          <Button
            onClick={toggleModal}
            style={{ backgroundColor: "#e0ff03", color: "#000728" }}
          >
            App anfragen
          </Button>
          <Modal isOpen={isOpen} onRequestClose={toggleModal} className="modal">
            <Image width={50} src={Logo} />
            <Text h6>Ihre Anfrage war Erfolgreich!</Text>
            <Text>
              Unser Team wird Ihre Anfrage schnellst möglich prüfen. Vielen Dank
              für Ihr Interesse an dieser Applikation. Beste Grüße, Ihr
              ti4f-Team{" "}
            </Text>
            <button
              style={{
                borderRadius: "12px",
                border: "none",
                backgroundColor: "#e0ff03",
                width: "4rem",
              }}
              onClick={toggleModal}
            >
              Close
            </button>
          </Modal>
          <button className="button">
            <AiOutlineAppstoreAdd />
            hinzufugen
          </button>
          <button
            className="button"
            onClick={() => copyToClipboard("https://www.example.com")}
          >
            <AiOutlineCopy />
            Link kopieren
          </button>
        </div>
      </Col>
    </div>
  );
};

export default Sidebar;
