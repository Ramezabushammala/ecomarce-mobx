"use client";
import React, { useState } from "react";
import { Col } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";
import Styles from "../../app/styles/category.module.css";
const CategorysHeader = () => {
  return (
    <div className={Styles.catheader}>
      <Container>
        <Row>
          <Col className="d-flex justify-content-start py-2 flex-wrap">
            <div className={Styles.cattextheader}>الكل</div>
            <div className={Styles.cattextheader}>الكترونيات</div>
            <div className={Styles.cattextheader}>ملابس</div>
            <div className={Styles.cattextheader}> كهربيه</div>
            <div className={Styles.cattextheader}>تخفيضات</div>
            <div className={Styles.cattextheader}>تخفيضات</div>
            <div className={Styles.cattextheader}>تخفيضات</div>
            <div className={Styles.cattextheader}>تخفيضات</div>
            <div className={Styles.cattextheader}>تخفيضات</div>
            <div className={Styles.cattextheader}>المزيد</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CategorysHeader;
