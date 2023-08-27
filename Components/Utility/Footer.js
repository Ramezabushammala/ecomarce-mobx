import React from "react";
import { Row } from "react-bootstrap";
import { Container, Col } from "react-bootstrap";
import facebook from "../../app/images/facebook.png";
import instagram from "../../app/images/instagram.png";
import twitter from "../../app/images/twitter.png";
import phone from "../../app/images/phone.png";
import Image from "next/image";
const Footer = () => {
  return (
    <div
      className="footerbackground footer mt-3 pt-2"
      style={{ maxHeight: "50px" }}
    >
      <Container className="">
        <Row className="d-flex justify-content-between align-items-center">
          <Col sm="6" className="d-flex align-items-center ">
            <div className="footershroot ">الشروط والاحكام</div>
            <div className="footershroot mx-2">سيايه الخصوصيه</div>
            <div className="footershroot mx-2">اتصل بنا</div>
          </Col>
          <Col
            sm="6"
            className="d-flex justify-content-end align-items-center "
          >
            <div className="d-flex pt-3 mx-2">
              <Image width="20px" height="20px" src={phone} alt="" />
              <p className="footerphone">0122455346356</p>
            </div>
            <div style={{ cursor: "pointer" }}>
              <Image width="10px" height="10px" src={facebook} alt="" />
            </div>
            <div style={{ cursor: "pointer" }} className="">
              <Image width="10px" height="10px" src={instagram} alt="" />
            </div>
            <div style={{ cursor: "pointer" }} className="">
              <Image width="10px" height="10px" src={twitter} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
