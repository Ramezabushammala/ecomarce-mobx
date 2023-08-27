"use client";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import laptops from "../../app/images/laptops.png";
import Image from "next/image";
import Styles from "../../app/styles/discount.module.css";
const DiscountSection = () => {
  return (
    <Container>
      <Row
        className={`${Styles.discountbackcolor} my-3  mx-2 d-flex text-center align-items-center`}
      >
        <Col sm="6">
          <div className={Styles.discounttitle}>
            خصم يصل حتي ٣٠٪ علي اجهازه اللاب توب
          </div>
        </Col>
        <Col sm="6">
          <Image className={Styles.dicountimg} src={laptops} alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default DiscountSection;
