import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Styles from "../../app/styles/admin.module.css";
import axiosInstance from "@/axiosinstance";
import notify from "../useNotfiction";
import { ToastContainer } from "react-toastify";
const AdminAddSubCategory = () => {
  const [name, setName] = useState("");
  const [catid, setCatid] = useState("0");
  const [category, setCategory] = useState([]);

  const getcategory = async () => {
    try {
      const res = await axiosInstance.get("/api/v1/categories");
      setCategory(res.data.data);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    getcategory();
  }, []);

  const onChangeNameSub = (e) => {
    setName(e.target.value);
  };
  const onChangCat = (e) => {
    setCatid(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (name === "" || catid === "0") {
      alert("Please fill all fields");
    }

    try {
      const res = await axiosInstance.post(
        "/api/v1/subcategories",
        {
          name,
          category: catid,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res) {
        notify("add sucessful", "success");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };
  return (
    <div>
      <Row className="justify-content-start ">
        <div className={`${Styles.admincontenttext} pb-4`}>
          اضافه تصنيف فرعي جديد
        </div>
        <Col sm="8">
          <input
            value={name}
            onChange={onChangeNameSub}
            type="text"
            className={`${Styles.inputform} d-block mt-3 px-3`}
            placeholder="اسم التصنيف الفرعي"
          />
          <select
            onChange={onChangCat}
            name="languages"
            id="lang"
            className={`${Styles.select} mt-3 px-2`}
          >
            <option value="0" hidden>
              اسم التصنيف الرئيسي
            </option>

            {category
              ? category.map((item, index) => {
                  return (
                    <option key={index} value={item._id}>
                      {" "}
                      {item.name}
                    </option>
                  );
                })
              : null}
          </select>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button
            onClick={onSubmit}
            className={`${Styles.btnsave} d-inline mt-2`}
          >
            {" "}
            حفظ التعديلات
          </button>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};
export default AdminAddSubCategory;
