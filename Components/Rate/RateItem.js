import React from "react";
import { Col, Row } from "react-bootstrap";
import rate from "../../app/images/rate.png";
import Image from "next/image";
import Styles from "../../app/styles/prodact.module.css";
const RateItem = () => {
  return (
    <div>
      <Row className="mt-3">
        <Col className="d-felx me-5">
          <div className={`${Styles.ratename} d-inline ms-2`}>احمد محمود</div>
          <Image className="" src={rate} alt="" height="16px" width="16px" />
          <div className="cat-rate  d-inline  p-1 pt-2">4.3</div>
        </Col>
      </Row>
      <Row className="border-bottom mx-2">
        <Col className="d-felx me-4 pb-2">
          <div className={`${Styles.ratedescription} d-inline ms-2`}>
            منتج مناسب سعره للوقت الحالي وجه كويس جدا ومعاه دراع زيادة
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default RateItem;
