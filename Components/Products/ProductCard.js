"use client";
import React from "react";
import { Card, Col } from "react-bootstrap";
import prod1 from "../../app/images/item.png";
import favoff from "../../app/images/fav-off.png";
import rate from "../../app/images/rate.png";
import Link from "next/link";
import Image from "next/image";
import Styles from "../../app/styles/cardProdact.module.css";
const ProductCard = () => {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="d-flex">
      <Link
        href="/prodact"
        style={{
          textDecoration: "none",
        }}
      >
        <Card
          className="my-2"
          style={{
            width: "100%",
            height: "345px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#FFFFFF",
            boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)",
          }}
        >
          <Image style={{ height: "228px", width: "100%" }} src={prod1} />
          <div className="d-flex justify-content-end mx-2">
            <Image
              src={favoff}
              alt="favofferror"
              className="text-center"
              height={24}
              width={26}
            />
          </div>
          <Card.Body>
            <Card.Title>
              <div className={Styles.cardtitle}>
                سود كربون ساعة يد ذكية بيب إس أسود كربون{" "}
              </div>
            </Card.Title>

            <div className="d-flex justify-content-between ">
              <div className="d-flex">
                <Image
                  className=""
                  src={rate}
                  alt="rateerr"
                  height={0}
                  width={16}
                />
                <div className={`${Styles.cardrate} mx-2`}>4.5</div>
              </div>
              <div className="d-flex">
                <div className={Styles.cardprice}>880</div>
                <div className={`${Styles.cardcurrency} mx-1`}>جنيه</div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default ProductCard;
