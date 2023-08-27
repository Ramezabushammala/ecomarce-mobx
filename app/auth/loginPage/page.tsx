"use client";

import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import  Link from "next/link";
import Styles from "../../styles/login.module.css"
import Head from 'next/head'
import axiosInstance from "@/axiosinstance";
import notify from '../../../Components/useNotfiction';
import { ToastContainer } from "react-toastify";
 function loginPage() {
  // const [email,setEmail]=useState("");
  // const [password,setPassword]=useState("");
  // const onChangeEmail = (e)=>{
  //   setEmail(e.target.value);
  // }
  // const onChangePassword= (e)=>{
  //   setPassword(e.target.value);
  // }
  // const onsubmitaccount=async(e)=>{
  //   e.preventDefault();
  //   if(!email||!password){
  //     alert("Please enter all fields");
  //   }
  //     const formdata ={
  //       email,
  //       password,
  //     }
  //     try{
  //       const res =await axiosInstance.post("/api/v1/auth/login",formdata,{
  //         headers:{
  //           Authorization: `Bearer ${localStorage.getItem("token")}`
  //         }
  //       })
  //       if(res.data.token){
  //         // not storeg object in localStoreg convert to string
  //         localStorage.setItem("token",res.data.token)
  //         localStorage.setItem("user",JSON.stringify(res.data.data))
  //         notify("تمت العملية بنجاح","success")
  //         setTimeout(() => {
  //             // refrch all page
  //             window.location.href = "/";
  //          //   Navigat("/");  just inside routes but navbar outside routs becuase name in navbar 
  //         }, 1500);
          
  //     }else{
  //         localStorage.removeItem("token");
  //         localStorage.removeItem("user");
  //     }

      
  //         localStorage.setItem("user",JSON.stringify(res.data.data))
  //         notify("تمت العملية بنجاح","success")
  //         setTimeout(() => {
  //           // refrch all page
  //           window.location.href = "/";
  //       }, 1500);

  //     }catch(error){
  //       notify("العملية خاطئة","error")
  //       console.log('Error:', error.response);
  //     }
  // }
  // console.log(props.response)
  return (
     <Container style={{ minHeight: "680px" }}>
      <Head>
        <title>Login Page</title>
      </Head>
      <Row className="py-5 d-flex justify-content-center ">
        <Col sm="12" className="d-flex flex-column ">
          <label className={`${Styles.titlelogin} mx-auto`}>تسجيل الدخول</label>
          <input
          // onChange={onChangeEmail}
          //  value={email}
            placeholder="الايميل..."
            type="text"
            className={`${Styles.userinput} my-3 text-center mx-auto`}
          />
          <input
            // onChange={onChangePassword}
            // value={password}
            placeholder="كلمه السر..."
            type="password"
            className={`${Styles.userinput} my-3 text-center mx-auto`}
          />
          <button className={`${Styles.btnlogin} mt-4 mx-auto`}>تسجيل الدخول</button>
          <label className="mx-auto my-4">
            ليس لديك حساب ؟{" "}
            <Link href="/auth" style={{ textDecoration: "none" }}>
              <span style={{ cursor: "pointer" }} className="text-danger">
                اضغط هنا
              </span>
            </Link>
          </label>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
   
  );
};

export default loginPage 
