import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import RateItem from "./RateItem";
import PostRate from "./PostRate";
import PaginationCompontent from "../Utility/Pagination";
import rate from "../../app/images/rate.png";
import Styles from "../../app/styles/prodact.module.css";
import Image from "next/image";
const RateContainer = () => {
  return (
    <Container className={Styles.ratecontainer}>
      <Row>
        <Col className="d-flex">
          <div className={`${Styles.subtile} d-inline p-1`}>التقيمات</div>
          <Image
            className="mt-2"
            src={rate}
            alt=""
            height="16px"
            width="16px"
          />
          <div className={`${Styles.catrate} d-inline p-1 pt-2`}>4.3</div>
          <div className={`${Styles.ratecount} d-inline p-1 pt-2`}>
            (160 تقييم)
          </div>
        </Col>
      </Row>
      <PostRate />
      <RateItem />
      <RateItem />
      <RateItem />
      <RateItem />
      <PaginationCompontent />
    </Container>
  );
};

export default RateContainer;
