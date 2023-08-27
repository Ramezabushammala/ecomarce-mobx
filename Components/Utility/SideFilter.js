import React from "react";
import { Row, Col } from "react-bootstrap";
import Styles from "../../app/styles/prodact.module.css";
const SideFilter = () => {
  return (
    <div className="mt-3">
      <Row>
        <div className="d-flex flex-column mt-2">
          <div className={Styles.filtertitle}>الفئة</div>
          <div className="d-flex mt-3">
            <input type="checkbox" value="" />
            <div className={`${Styles.filtersub} me-2`}>الكل</div>
          </div>
          <div className="d-flex mt-2">
            <input type="checkbox" value="" />
            <div className={`${Styles.filtersub} me-2`}>اجهزة منزلية</div>
          </div>
          <div className="d-flex mt-2">
            <input type="checkbox" value="" />
            <div className={`${Styles.filtersub} me-2`}>اجهزة منزلية</div>
          </div>
          <div className="d-flex mt-2">
            <input type="checkbox" value="" />
            <div className={`${Styles.filtersub} me-2`}>اجهزة منزلية</div>
          </div>
          <div className="d-flex mt-2">
            <input type="checkbox" value="" />
            <div className={`${Styles.filtersub} me-2`}>اجهزة منزلية</div>
          </div>
        </div>

        <div className="d-flex flex-column mt-2">
          <div className={`${Styles.filtertitle} mt-3`}>الماركة</div>
          <div className="d-flex mt-3">
            <input type="checkbox" value="" />
            <div className="filter-sub me-2 ">الكل</div>
          </div>
          <div className="d-flex mt-2">
            <input type="checkbox" value="" />
            <div className={`${Styles.filtersub} me-2`}>ابل</div>
          </div>
          <div className="d-flex mt-2">
            <input type="checkbox" value="" />
            <div className={`${Styles.filtersub} me-2`}>سامسونج</div>
          </div>
        </div>

        <div className={`${Styles.filtertitle} mt-3`}>السعر</div>
        <div className="d-flex">
          <p className={`${Styles.filtersub} me-2`}>من:</p>
          <input
            className="m-2 text-center"
            type="number"
            style={{ width: "50px", height: "25px" }}
          />
        </div>
        <div className="d-flex">
          <p className={`${Styles.filtersub} me-2`}>الي:</p>
          <input
            className="m-2 text-center"
            type="number"
            style={{ width: "50px", height: "25px" }}
          />
        </div>
      </Row>
    </div>
  );
};

export default SideFilter;
