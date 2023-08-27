import React, { useEffect, useState } from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import avatar from "../../app/images/avatar.png";
import Image from "next/image";
import Styles from "../../app/styles/admin.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Createcategory } from "@/redux/feature/categorySlice";
import notify from "../useNotfiction";
import { ToastContainer } from "react-toastify";
const AdminAddCategory = () => {
  const [namecategory, setNamecategory] = useState("");
  const [imagecategory, setImagecategory] = useState(avatar);
  const [selectedfile, setSelectedfile] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [ispress, setIspress] = useState(false);

  const dispatch = useDispatch();
  const { categorie } = useSelector((state) => state.AllCategory);
  console.log(categorie);
  const onChangeNameCategory = (e) => {
    setNamecategory(e.target.value);
  };

  // when image change save it
  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      // عملنا هنا الشرط عشان ممكن يضغط وما يحتار صورة
      setImagecategory(URL.createObjectURL(e.target.files[0])); // هنا تخزن كصورة
      setSelectedfile(e.target.files[0]); // هنا تخزن كمسار
    }
  };

  const handelSubmit = async (e) => {
    e.preventDefault();

    if (namecategory === "" || selectedfile === null) {
      notify("please enter information", "warn");
      return;
    }
    // console.log(response);
    const formData = {
      name: namecategory,
      image: imagecategory,
    };

    // setLoading(true);
    // setIspress(true);

    // Dispatch the action with the FormData as the payload
    await dispatch(Createcategory(formData));
    //  if(response){
    //    notify("add sucessful","success");
    // }else{
    //    notify("add field","error");
    //   };
  };
  // setLoading(false);
  // setIspress(false);
  // const res = axios.post("http://127.0.0.1:8000/api/v1/categories" ,{name:'ramez' ,age:'22'})   في حال ببعت بيانات عادية مش صور هيك الاوبجكت
  // useEffect(() => {
  //   if (loading === false) {
  //     setImagecategory(avatar);
  //     setNamecategory("");
  //     // setSelectedfile(null)
  //     setLoading(true);
  //     setTimeout(() => setIspress(false), 2000);
  //     // حطينا الشرط هنا عشان بدي اخر حالة لو كانت برا اليوزايفكت مش هتزبط وتطبع الي قبل
  //     //  if(res.status === 201){
  //     //   notify("add sucessful","success");
  //     // }else{
  //     //   notify("add field","error");
  //     // }
  //   }
  // }, [loading]);

  return (
    <div>
      <Row className="justify-content-start ">
        <div className={`${Styles.admincontenttext} pb-4`}>
          اضافه تصنيف جديد
        </div>
        <Col sm="8">
          <div className={`${Styles.textform} pb-2`}>صوره التصنيف</div>

          <div>
            <label for="upload-photo">
              <Image
                src={imagecategory}
                alt="fix"
                height={100}
                width={120}
                style={{ cursor: "pointer" }}
              />
            </label>
            <input
              type="file"
              name="photo"
              onChange={onImageChange}
              id="upload-photo"
            />
          </div>

          <input
            value={namecategory}
            onChange={onChangeNameCategory}
            type="text"
            className={`${Styles.inputform} d-block mt-3 px-3`}
            placeholder="اسم التصنيف"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button
            onClick={handelSubmit}
            className={`${Styles.btnsave} d-inline mt-2`}
          >
            حفظ التعديلات
          </button>
        </Col>
      </Row>
      {/* {ispress ? (
        loading ? (
          <Spinner animation="grow" variant="primary" />
        ) : (
          <h1> ending.... </h1>
        )
      ) : null} */}
      <ToastContainer />
    </div>
  );
};
export default AdminAddCategory;
