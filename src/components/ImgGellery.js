import React from "react";
// import imggalleryPic from "../images/img-gallery.png";

import Slider from "react-slick";

import CompanyImg1 from "../images/gallery/company_1.png";
import CompanyImg2 from "../images/gallery/company_2.png";
import CompanyImg3 from "../images/gallery/company_3.png";
import CompanyImg4 from "../images/gallery/company_4.png";
import CompanyImg5 from "../images/gallery/company_5.png";
import CompanyImg6 from "../images/gallery/company_6.png";
import CompanyImg7 from "../images/gallery/company_7.png";
import CompanyImg8 from "../images/gallery/company_8.png";
import CompanyImg9 from "../images/gallery/company_9.png";
import CompanyImg10 from "../images/gallery/company_10.png";
import CompanyImg11 from "../images/gallery/company_11.png";
import CompanyImg12 from "../images/gallery/company_12.png";
import CompanyImg13 from "../images/gallery/company_13.png";
import CompanyImg14 from "../images/gallery/company_14.png";

const ImgGellery = () => {
  var settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 600,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 25000,
        },
      },
    ],
  };
  return (
    <div>
      <div className="img-gallery-sec">
        <div className="container ">
          <div className="sectionHeading  text-center">
            <h2 className="techno-heading">Gallery</h2>
            <div className="techno-underline"></div>
          </div>
          <div className="img-gallery-inner-sec  text-center">
            {/* <img src={imggalleryPic} alt="" /> */}

            <Slider {...settings}>
              <div className="gallery-img-container">
                <img src={CompanyImg13} alt="" />
              </div>
              <div className="gallery-img-container">
                <img src={CompanyImg14} alt="" />
              </div>
              <div className="gallery-img-container">
                <img src={CompanyImg1} alt="" />
              </div>
              <div className="gallery-img-container">
                <img src={CompanyImg2} alt="" />
              </div>
              <div className="gallery-img-container">
                <img src={CompanyImg3} alt="" />
              </div>
              <div className="gallery-img-container">
                <img src={CompanyImg4} alt="" />
              </div>
              <div className="gallery-img-container">
                <img src={CompanyImg5} alt="" />
              </div>
              <div className="gallery-img-container">
                <img src={CompanyImg6} alt="" />
              </div>
              <div className="gallery-img-container">
                <img src={CompanyImg7} alt="" />
              </div>
              <div className="gallery-img-container">
                <img src={CompanyImg8} alt="" />
              </div>
              <div className="gallery-img-container">
                <img src={CompanyImg9} alt="" />
              </div>
              <div className="gallery-img-container">
                <img src={CompanyImg10} alt="" />
              </div>
              <div className="gallery-img-container">
                <img src={CompanyImg11} alt="" />
              </div>
              <div className="gallery-img-container">
                <img src={CompanyImg12} alt="" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImgGellery;
