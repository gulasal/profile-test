import React, { useState } from "react";
import { Card, Image, Button, Row, Col } from "@nextui-org/react";
import { Link } from "react-router-dom";
import "./Ti4fStore.css";

const Ti4fCard = ({ data, filteredCards }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  // const handleInputChange = (e) => {
  //   const { value } = e.target;
  //   // Filter the data based on the selected categories
  //   const filteredData = data.filter((item) =>
  //     item.categories.some((category) =>
  //       category.toLowerCase().includes(value.toLowerCase())
  //     )
  //   );
  //   setSelectedCategories(filteredData);
  // };

  return (
    <div className="card-list">
      {filteredCards.map((item) => (
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
