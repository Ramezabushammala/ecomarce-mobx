import React from "react";
import Link from "next/link";
import Styles from "../../app/styles/admin.module.css";
const AdminSideBar = () => {
  return (
    <div className={`${Styles.sidebar}`}>
      <div className="d-flex flex-column">
        <Link href="/admin/allorders" style={{ textDecoration: "none" }}>
          <div
            className={`${Styles.adminsidetext} mt-3 border-bottom p-2 mx-auto text-center`}
          >
            اداره الطلبات
          </div>
        </Link>
        <Link href="/admin/allproducts" style={{ textDecoration: "none" }}>
          <div
            className={`${Styles.adminsidetext} my-1 border-bottom p-2 mx-auto text-center`}
          >
            اداره المنتجات
          </div>
        </Link>
        <Link href="/admin/adminaddbrand" style={{ textDecoration: "none" }}>
          <div
            className={`${Styles.adminsidetext} my-1 border-bottom p-2 mx-auto text-center`}
          >
            اضف ماركه
          </div>
        </Link>
        <Link href="/admin/adminaddcategory" style={{ textDecoration: "none" }}>
          <div
            className={`${Styles.adminsidetext} my-1 border-bottom p-2 mx-auto text-center`}
          >
            اضف تصنيف
          </div>
        </Link>
        <Link
          href="/admin/adminaddsubcategory"
          style={{ textDecoration: "none" }}
        >
          <div
            className={`${Styles.adminsidetext} my-1 border-bottom p-2 mx-auto text-center`}
          >
            اضف تصنيف فرعي
          </div>
        </Link>
        <Link href="/admin/adminaddprodact" style={{ textDecoration: "none" }}>
          <div
            className={`${Styles.adminsidetext} my-1 border-bottom p-2 mx-auto text-center`}
          >
            اضف منتج
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AdminSideBar;
