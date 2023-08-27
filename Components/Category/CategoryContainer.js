import React from "react";
import { Container, Row } from "react-bootstrap";
import CategoryCard from "./CategoryCard";
import clothe from "../../app/images/clothe.png";
import cat2 from "../../app/images/cat2.png";
import labtop from "../../app/images/labtop.png";
import sale from "../../app/images/sale.png";
import pic from "../../app/images/pic.png";
import Styles from "../../app/styles/category.module.css";
const CategoryContainer = () => {
  return (
    <div className="my-3">
      <Container>
        <div className={Styles.admincontenttext}>كل التصنيفات</div>
        <Row className="my-1 justify-content-between">
          <CategoryCard img={clothe} background="#F4DBA5" />
          <CategoryCard img={cat2} background="#0034FF" />
          <CategoryCard img={labtop} background="#FFD3E8" />
          <CategoryCard img={clothe} background="#55CFDF" />
          <CategoryCard img={sale} background="#FF6262" />
          <CategoryCard img={pic} background="#F4DBA5" />
          <CategoryCard img={cat2} background="#0034FF" />
          <CategoryCard img={labtop} background="#FFD3E8" />
          <CategoryCard img={clothe} background="#55CFDF" />
          <CategoryCard img={sale} background="#FF6262" />
          <CategoryCard img={clothe} background="#F4DBA5" />
          <CategoryCard img={cat2} background="#0034FF" />
        </Row>
      </Container>
    </div>
  );
};

export default CategoryContainer;
