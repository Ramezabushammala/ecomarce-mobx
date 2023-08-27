'use client'
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import  Link  from "next/link";
import Styles from "../styles/login.module.css"
import Head from 'next/head'
import axiosInstance from "@/axiosinstance";
const Rigester = () => {
// const [name,setName]=useState("");
// const [email,setEmail]=useState("");
// const [password,setPassword]=useState("");
// const [passwordConfirm,setPasswordConfirm]=useState("");
// const [phone,setPhone]=useState("");
// const [loading,setLoading]=useState(true);

// const onChangename = (e)=>{
//    setName(e.target.value);
// }
// const onChangeEmail = (e)=>{
//   setEmail(e.target.value);
// }
// const onChangePassword= (e)=>{
//   setPassword(e.target.value);
// }
// const onChangePasswordConfirm= (e)=>{
//   setPasswordConfirm(e.target.value);
// }
// const onChangePhone= (e)=>{
//   setPhone(e.target.value);
// }
// const onsubmitaccount=async(e)=>{
//   e.preventDefault();
//   if(!name ||!email||!password){
//     alert("Please enter all fields");
//   }
//   const formData = {
//     name,
//     email,
//     password,
//     passwordConfirm,
//     phone
// };
// try{
//   const res = await axiosInstance.post(`/api/v1/auth/signup`,formData,{
//     headers: {
//       'Content-Type': 'application/json',
//     }
    
//   })
//   localStorage.setItem("token",res.data.token)
// }catch(error){
//   console.log('Error:', error.response);
// }
// }

  return (
    <Container style={{ minHeight: "680px" }}>
      <Head>
        <title>Regester Page</title>
      </Head>
      <Row className="py-5 d-flex justify-content-center hieght-search">
        <Col sm="12" className="d-flex flex-column ">
          <label className={`${Styles.titlelogin} mx-auto`}>تسجيل حساب جديد</label>
          <input
            // value={name}
            // onChange={onChangename}
            placeholder="اسم المستخدم..."
            type="text"
            className={`${Styles.userinput} my-3 text-center mx-auto`}
          />
          <input
            // value={email}
            // onChange={onChangeEmail}
            placeholder="الايميل..."
            type="text"
            className={`${Styles.userinput} my-3 text-center mx-auto`}
          />
          <input
            // value={password}
            // onChange={onChangePassword}
            placeholder="كلمه السر..."
            type="password"
            className={`${Styles.userinput} my-3 text-center mx-auto`}
          />
           <input
          //  value={passwordConfirm}
          //  onChange={onChangePasswordConfirm}
            placeholder="تاكيد كلمة السر..."
            type="password"
            className={`${Styles.userinput} my-3 text-center mx-auto`}
          />
          <input
          //  value={phone}
          //  onChange={onChangePhone}
            placeholder="رقم الجوال ..."
            type="text"
            className={`${Styles.userinput} my-3 text-center mx-auto`}
          />
          <button  className={`${Styles.btnlogin} mt-4 mx-auto`}>تسجيل الحساب</button>
          <label className="mx-auto my-4">
            لديك حساب بالفعل؟{" "}
            <Link href="auth/loginPage" style={{ textDecoration: "none" }}>
              <span style={{ cursor: "pointer" }} className="text-danger">
                اضغط هنا
              </span>
            </Link>
          </label>
        </Col>
      </Row>
    </Container>
  );
};

export default Rigester;

// export async function getServerSideProps() {
//  try{

//  const formData = {
//      name:username,
//      email,
//      password,
//      passwordConfirm,
//      phone
//  };
//   const res = await axiosInstance.post(`/api/v1/auth/signup`,{
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(formData),
//   })
//   console.log(res.data)
//     return {
//       props:{
//         response:res.data
//       }
//     }
//  }catch (error) {
//   // Handle the error
//   console.error('Error occurred:', error);
  
//   // Return an error object as props
//   return {
//     props: {
//       response: error+ 'An error occurred'
//     }
//   };
// }
    
// }