"use client";
import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import clothe from "../../app/images/clothe.png";
import CategoryCard from "../Category/CategoryCard";
import SubTitle from "../Utility/SubTitle";
import { useStore } from "@/Hooks/useStore";

const HomeCategory = () => {

  const {rootStore:{ categoryStore }} = useStore();

  useEffect(() => {
    categoryStore.fetchAllCategory();
     console.log(categoryStore.allcategory);
  }, []);
  return (
    <Container>
      <SubTitle title=" التصنيفات" btntitle="المزيد" pathText="/categores" />
      <Row className="my-2 d-flex  justify-content-between">
        {/* {categoryStore? (
          categoryStore.data.map((item, index) => {
            return (
              <CategoryCard
                key={index}
                title={item.name}
                img={clothe}
                background="#0034FF"
              />
            );
          })
        ) : console.log(res)} */}
      </Row>
    </Container>
  );
};

export default HomeCategory;
