import React from "react";
import Link from "next/link";
import Styles from "../../app/styles/slider.module.css";
const SubTitle = ({ title, btntitle, pathText }) => {
  return (
    <div className="d-flex justify-content-between pt-4">
      <div className={Styles.subtile}>{title}</div>
      {btntitle ? (
        <Link href={`${pathText}`} style={{ textDecoration: "none" }}>
          <div className={Styles.shoppingnow}>{btntitle}</div>
        </Link>
      ) : null}
    </div>
  );
};

export default SubTitle;
