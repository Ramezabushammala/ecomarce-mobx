import React from "react";
import { Col } from "react-bootstrap";
import Image from "next/image";
import Styles from "../../app/styles/category.module.css";
const CategoryCard = ({ img, background, title }) => {
  return (
    <Col
      xs="6"
      sm="6"
      md="4"
      lg="2"
      className="my-4 d-flex justify-content-around "
    >
      <div className={`${Styles.allCard} mb-3`}>
        <div
          className={Styles.categotycard}
          style={{ backgroundColor: `${background}` }}
        ></div>{" "}
        <Image
          alt="zcv"
          src={img}
          width="0"
          height="0"
          sizes="100vw"
          className={`${Styles.categotycardimg} w-full h-auto`}
        />
        <p className={`${Styles.categotycardtext} my-2`}>{title}</p>
      </div>
    </Col>
  );
};

export default CategoryCard;
