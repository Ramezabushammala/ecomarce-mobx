"use client";
import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import sliderimg from "../../app/images/slider1.png";
import slider4 from "../../app/images/slider4.png";
import prod3 from "../../app/images/prod3.png";
import prod4 from "../../app/images/prod4.png";
import Styles from "../../app/styles/slider.module.css";
import Image from "next/image";
const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className={Styles.sliderbackground} interval={2000}>
        <div className="d-flex flex-row justify-content-center align-items-center">
          <Image width={373.53} height={296} src={slider4} alt="First slide" />
          <div className="">
            <h3 className={Styles.slidertitle}>هناك خصم كبير</h3>
            <p className={Styles.slidertext}>خصم يصل ٥٠٪ عند شرائك</p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className={Styles.sliderbackground2} interval={2000}>
        <div className="d-flex flex-row justify-content-center align-items-center">
          <Image
            width={373.53}
            height={296}
            src={sliderimg}
            alt="First slide"
          />
          <div className="">
            <h3 className={Styles.slidertitle}>هناك خصم كبير</h3>
            <p className={Styles.slidertext}>خصم يصل ٥٠٪ عند شرائك</p>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item className={Styles.sliderbackground3} interval={2000}>
        <div className="d-flex flex-row justify-content-center align-items-center">
          <Image width={373.53} height={296} src={prod3} alt="First slide" />
          <div className="">
            <h3 className={Styles.slidertitle}>هناك خصم كبير</h3>
            <p className={Styles.slidertext}>خصم يصل ٥٠٪ عند شرائك</p>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item className={Styles.sliderbackground4} interval={2000}>
        <div className="d-flex flex-row justify-content-center align-items-center">
          <Image width={373.53} height={296} src={prod4} alt="First slide" />
          <div className="">
            <h3 className={Styles.slidertitle}>هناك خصم كبير</h3>
            <p className={Styles.slidertext}>خصم يصل ٥٠٪ عند شرائك</p>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
