import React from "react";
import mobile from "../../app/images/mobile.png";
import mobile1 from "../../app/images/mobile1.png";
import mobile2 from "../../app/images/mobile2.png";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import LeftButton from "./LeftButton";
import RightButton from "./RightButton";
import Styles from "../../app/styles/prodact.module.css";
const ProductGallery = () => {
  const images = [
    {
      original: `${mobile}`,
    },
    {
      original: `${mobile1}`,
    },
    {
      original: `${mobile2}`,
    },
    {
      original: `${mobile}`,
    },
  ];

  return (
    <div
      className={`${Styles.productgallarycard} d-flex justfiy-content-center  align-items-center pt-2`}
    >
      <ImageGallery
        items={images}
        defaultImage={mobile1}
        showThumbnails={false}
        isRTL={true}
        showPlayButton={false}
        renderRightNav={RightButton}
        renderLeftNav={LeftButton}
        showFullscreenButton={false}
      />
    </div>
  );
};

export default ProductGallery;
