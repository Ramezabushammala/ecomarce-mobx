"use client";
import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import avatar from "../../app/images/avatar.png";
import add from "../../app/images/add.png";
import Multiselect from "multiselect-react-dropdown";
import MultiImageInput from "react-multiple-image-input";
import Image from "next/image";
import Styles from "../../app/styles/admin.module.css";
import axiosInstance from "@/axiosinstance";
const AdminAddProducts = () => {
  const [categorie, setCategorie] = useState([]);
  const [subcategorie, setSubcategorie] = useState([]);
  const [brand, setBrand] = useState([]);
  const [options, setOptions] = useState([]);
  const getcategory = async () => {
    try {
      const res = await axiosInstance.get("/api/v1/categories");
      setCategorie(res.data.data);
    } catch (error) {
      console.log("Error", error);
    }
  };
  const getbrand = async () => {
    try {
      const res = await axiosInstance.get("/api/v1/brands");
      setBrand(res.data.data);
    } catch (error) {
      console.log("Error", error);
    }
  };
  const getsubcategory = async (e) => {
    const id = e.target.value;
    try {
      const res = await axiosInstance.get(
        `/api/v1/categories/${id}/subcategories`
      );
      setSubcategorie(res.data.data);

      if (subcategorie && id !== 0) {
        setOptions(subcategorie);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    getcategory();
    getbrand();
  }, []);
  const onSelect = (selectedList, selectedItem) => {};

  const onRemove = (selectedList, removedItem) => {};

  return (
    <div>
      <Row className="justify-content-start ">
        <div className={`${Styles.admincontenttext} pb-4`}>
          {" "}
          اضافه منتج جديد
        </div>
        <Col sm="8">
          <div className={`${Styles.textform} pb-2`}> صور للمنتج</div>
          <Image src={avatar} alt="" height={100} width={120} />
          <input
            type="text"
            className={`${Styles.inputform} d-block mt-3 px-3`}
            placeholder="اسم المنتج"
          />
          <textarea
            className={`${Styles.inputformarea} p-2 mt-3`}
            rows="4"
            cols="50"
            placeholder="وصف المنتج"
          />
          <input
            type="number"
            className={`${Styles.inputform} d-block mt-3 px-3`}
            placeholder="السعر قبل الخصم"
          />
          <input
            type="number"
            className={`${Styles.inputform} d-block mt-3 px-3`}
            placeholder="السعر بعد الخصم"
          />
          <input
            type="number"
            className={`${Styles.inputform} d-block mt-3 px-3`}
            placeholder="الكمية المتاحة للمنتج"
          />
          <select
            onChange={getsubcategory}
            name="languages"
            id="lang"
            className={`${Styles.select} ${Styles.inputformarea} mt-3 px-2`}
          >
            <option value="0">التصنيف الرئيسي</option>
            {categorie
              ? categorie.map((item, index) => {
                  return (
                    <option key={index} value={item._id}>
                      {" "}
                      {item.name}
                    </option>
                  );
                })
              : null}
          </select>

          <Multiselect
            className="mt-2 text-end"
            placeholder="التصنيف الفرعي"
            options={options}
            onSelect={onSelect}
            onRemove={onRemove}
            displayValue="name"
            style={{ color: "red" }}
          />
          <select
            onChange={getbrand}
            name="brand"
            id="brand"
            className={`${Styles.select} ${Styles.inputformarea} mt-3 px-2`}
          >
            <option value="val">الماركة</option>
            {brand
              ? brand.map((item, index) => {
                  return (
                    <option key={index} value={item._id}>
                      {" "}
                      {item.name}
                    </option>
                  );
                })
              : null}
          </select>
          <div className={`${Styles.textform} mt-3`}>
            {" "}
            الالوان المتاحه للمنتج
          </div>
          <div className="mt-1 d-flex">
            <div
              className={`${Styles.color} ms-2 border mt-1`}
              style={{ backgroundColor: "#E52C2C" }}
            ></div>
            <div
              className={`${Styles.color} ms-2 border mt-1`}
              style={{ backgroundColor: "green" }}
            ></div>
            <div
              className={`${Styles.color} ms-2 border mt-1`}
              style={{ backgroundColor: "black" }}
            ></div>
            <Image src={add} alt="" width={30} height={35} className="" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button className={`${Styles.btnsave} d-inline mt-2 `}>
            حفظ التعديلات
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default AdminAddProducts;
