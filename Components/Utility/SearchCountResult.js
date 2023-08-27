import React from "react";
import UnopDropdown from "unop-react-dropdown";
import sort from "../../app/images/sort.png";
import Styles from "../../app/styles/prodact.module.css";
import Image from "next/image";
const SearchCountResult = ({ title }) => {
  const handler = () => {};
  const handler2 = () => {};
  return (
    <div className="d-flex justify-content-between pt-3 px-2">
      <div className={Styles.subtile}>{title}</div>
      <div className="search-count-text d-flex ">
        <UnopDropdown
          onAppear={handler}
          onDisappearStart={handler}
          trigger={
            <p className="mx-1">
              <Image
                width="20px"
                height="20px"
                className="ms-1"
                src={sort}
                alt=""
              />
              ترتيب حسب
            </p>
          }
          delay={0}
          align="CENTER"
          hover
        >
          <div className={Styles.cardfilter}>
            <div className={`${Styles.cardfilteritem} border-bottom`}>
              الاكثر مبيعا
            </div>
            <div className={`${Styles.cardfilteritem} border-bottom`}>
              الاعلي تقييما
            </div>
            <div className={`${Styles.cardfilteritem} border-bottom`}>
              السعر من الاقل للاعلي
            </div>
            <div className={Styles.cardfilteritem}>السعر من الاعلي للاقل</div>
          </div>
        </UnopDropdown>
      </div>
    </div>
  );
};

export default SearchCountResult;
