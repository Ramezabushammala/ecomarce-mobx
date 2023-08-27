"use client";
import React from "react";
import { Container, Row } from "react-bootstrap";
import BrandCard from "./BrandCard";
import SubTitle from "../Utility/SubTitle.js";
import brand1 from "../../app/images/brand1.png";
import brand2 from "../../app/images/brand2.png";
import brand3 from "../../app/images/brand3.png";

const BrandFeatured = ({ title, btntitle, pathText }) => {
  if (pathText === "") {
    pathText = "404";
  }
  return (
    <div className="my-3">
      <Container>
        <SubTitle title="اشهر الماركات" btntitle="المزيد" pathText={pathText} />

        <Row className="my-1 justify-content-between">
          <BrandCard img={brand1} />
          <BrandCard img={brand2} />
          <BrandCard img={brand3} />
          <BrandCard img={brand2} />
          <BrandCard img={brand1} />
          <BrandCard img={brand3} />
        </Row>
      </Container>
    </div>
  );
};

export default BrandFeatured;
