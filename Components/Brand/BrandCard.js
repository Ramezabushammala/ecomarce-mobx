import React from "react";
import { Card, Col } from "react-bootstrap";
import Image from 'next/image'
const BrandCard = ({ img }) => {
  return (
    <Col
      xs="6"
      sm="6"
      md="4"
      lg="2"
      className="my-2 d-flex justify-content-center">
      <Card
        className="my-1"
        style={{
          width: "100%",
          height: "151px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#FFFFFF",
        }}>
        <Image style={{ width: "100%", height: "151px" }} src={img} />
      </Card>
    </Col>
  );
};

export default BrandCard;
