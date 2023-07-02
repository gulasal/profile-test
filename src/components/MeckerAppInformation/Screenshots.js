import React from "react";
import { Image, Spacer } from "@nextui-org/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";
import image4 from "./images/image4.png";
import "./style.css";

const Screenshots = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
  };
  return (
    <div
      style={{
        width: "54rem",
        height: "70%",
        padding: "1rem 2rem",
        borderRadius: "12px",
        backgroundColor: "#FFFFFF",
      }}
    >
      <h2 style={{ borderBottom: "2px solid #B8B8B8", fontFamily: "" }}>
        {" "}
        Screenshots
      </h2>
      <Spacer />
      <Slider {...settings}>
        <div style={{ boxShadow: "5px 5px 5px  grey" }}>
          <Image width={170} className="image" src={image1} />
        </div>
        <div>
          <Image width={170} className="image" src={image2} />
        </div>
        <div>
          <Image width={170} className="image" src={image3} />
        </div>
        <div>
          <Image width={170} className="image" src={image4} />
        </div>
        <div>
          <Image width={170} className="image" src={image1} />
        </div>
        <div>
          <Image width={170} className="image" src={image2} />
        </div>
        <div>
          <Image width={170} className="image" src={image3} />
        </div>
        <div>
          <Image width={170} className="image" src={image4} />
        </div>
      </Slider>
    </div>
  );
};

export default Screenshots;
