"use client";
import React, { useEffect, useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  FormControl,
  NavDropdown,
} from "react-bootstrap";
import logo from "../../app/images/logo.png";
import login from "../../app/images/login.png";
import cart from "../../app/images/cart.png";
import Image from "next/image";
import Link from "next/link";
import Styles from "../../app/styles/navbar.module.css";
const NavBarLogin = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    if (localStorage.getItem("user") != null) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser("");
  };

  return (
    <Navbar
      className="sticky-top"
      bg="dark"
      variant="dark"
      expand="sm"
      style={{ height: "85px" }}
    >
      <Container>
        <Navbar.Brand>
          <Link href="/">
            <Image src={logo} className={Styles.logo} alt="sfvs" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <FormControl
            type="search"
            placeholder="ابحث..."
            className="me-2 w-100 text-center"
            aria-label="Search"
          />
          <Nav className="me-auto">
            {
              // return ramez edit class css any dropdown menue in global css
              // to see class css from reactcompnent open combonent in bootstrap5
              user ? (
                <NavDropdown className="mt-4" title={user.name} id="basic-nav-dropdown">
                  {user.role === "admin" ? (
                    <NavDropdown.Item href="/admin/adminaddprodact">
                      {" "}
                      لوحة التحكم
                    </NavDropdown.Item>
                  ) : (
                    <NavDropdown.Item href="/">الصفحة الشحصية</NavDropdown.Item>
                  )}
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logout} href="/">
                    {" "}
                    تسجيل خروج
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Nav.Link
                  href="auth/loginPage"
                  className="nav-text d-flex mt-4 justify-content-center"
                >
                  <p style={{ color: "white" }}>Login</p>
                  <Image src={login} className={Styles.loginimg} alt="sfvs" />
                </Nav.Link>
              )
            }
            {/* <Nav.Link
              href="/auth/loginpage"
              className={`d-flex mt-4 justify-content-center`}>
                <p style={{ color: "white" }}>{user.name}</p>
              <Image src={login} 
              className={Styles.loginimg} 
               alt="sfvs" />
            </Nav.Link> */}
            <Nav.Link
              href="/cart"
              className={`d-flex mt-4 justify-content-center`}
              style={{ color: "white" }}
            >
              <p style={{ color: "white" }}>Car</p>
              <Image src={cart} className={Styles.loginimg} alt="sfvs" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarLogin;
