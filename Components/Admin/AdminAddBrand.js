"use client";
import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import avatar from "../../app/images/avatar.png";
import Image from "next/image";
import Styles from "../../app/styles/admin.module.css";
import notify from "../useNotfiction";
import { ToastContainer } from "react-toastify";
import axiosInstance from "@/axiosinstance";
const AdminAddBrand = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(avatar);
  const [selectedfile, setSelectedfile] = useState(null);
  const { loading, setLoading } = useState(true);
  const handelonChangeName = (e) => {
    setName(e.target.value);
  };
  const handleonchangeFile = (event) => {
    if (event.target.value && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
      setSelectedfile(event.target.files[0]);
    }
  };
  let res = [];
  const onsubmit = async (e) => {
    e.preventDefault();

    if (name === "" || selectedfile === null) {
      notify("please enter information", "warn");
      return;
    }

    const formData = {
      name,
      image,
    };
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };

      res = await axiosInstance.post("/api/v1/brands", formData, config);

      if (res.status === 201) {
        notify("add sucessful", "success");
        setImage(avatar);
        setName("");
        setSelectedfile(null);
      } else {
        notify("add field", "error");
      }
    } catch (error) {
      alert("Error uploading file");
    }
  };
  //  useEffect(()=>{
  //     if(loading===false){
  //       setImage(avatar);
  //       setName("");
  //       setSelectedfile(null)
  //       setLoading(true)
  //     }
  //  },[loading])
  // console.log(selectedfile)
  return (
    <div>
      <Row className="justify-content-start ">
        <div className={`${Styles.admincontenttext} pb-4`}>اضف ماركه جديده</div>
        <Col sm="8">
          <div className={`${Styles.textform} pb-2`}>صوره الماركه</div>
          <div>
            <label for="upload-photo">
              <Image
                src={image}
                alt="fix"
                height={100}
                width={120}
                style={{ cursor: "pointer" }}
              />
            </label>
            <input
              onChange={handleonchangeFile}
              type="file"
              name="photo"
              id="upload-photo"
            />
          </div>
          <input
            value={name}
            onChange={handelonChangeName}
            type="text"
            className={`${Styles.inputform} d-block mt-3 px-3`}
            placeholder="اسم الماركه"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button
            onClick={onsubmit}
            className={`${Styles.btnsave} d-inline mt-2`}
          >
            حفظ التعديلات
          </button>
        </Col>
        <ToastContainer />
      </Row>
    </div>
  );
};

export default AdminAddBrand;
