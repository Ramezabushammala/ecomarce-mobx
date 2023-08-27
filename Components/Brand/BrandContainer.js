import React, { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BrandCard from "./BrandCard";
import brand1 from "../../app/images/brand1.png";
import brand2 from "../../app/images/brand2.png";
import brand3 from "../../app/images/brand3.png";
import Styles from "../../app/styles/category.module.css";
const BrandContainer = () => {
  return (
    <div className="my-3">
      <Container>
        <div className={Styles.admincontenttext}>كل الماركات</div>
        <Row className="my-1 justify-content-between">
          <BrandCard img={brand1} />
          <BrandCard img={brand2} />
          <BrandCard img={brand3} />
          <BrandCard img={brand2} />
          <BrandCard img={brand1} />
          <BrandCard img={brand3} />
          <BrandCard img={brand1} />
          <BrandCard img={brand2} />
          <BrandCard img={brand3} />
          <BrandCard img={brand2} />
          <BrandCard img={brand1} />
          <BrandCard img={brand3} />
          <BrandCard img={brand1} />
          <BrandCard img={brand2} />
          <BrandCard img={brand3} />
          <BrandCard img={brand2} />
          <BrandCard img={brand1} />
          <BrandCard img={brand3} />
          <BrandCard img={brand2} />
          <BrandCard img={brand1} />
          <BrandCard img={brand1} />
          <BrandCard img={brand2} />
          <BrandCard img={brand2} />
          <BrandCard img={brand3} />
        </Row>
      </Container>
    </div>
  );
};

export default BrandContainer;
