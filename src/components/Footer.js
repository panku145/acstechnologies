import React from "react";
import { Link } from "react-router-dom";
import footerBg from "../images/SAP/footer-bg.jpg";
import India from "../images/SAP/ftr-ind.svg";
import US from "../images/SAP/ftr-us.svg";
import upwork from "../images/SAP/upwork.svg";
import ScrollToTop from "./scrollToTop";

const Footer = () => {
  return (
    <footer>
      <ScrollToTop />
      <div
        className="footer-sec"
        style={{ backgroundImage: `url(${footerBg})` }}
      >
        <div className="container">
          <div className="footer-head">
            <p className="ftr-hd">
              WE'd <span>Love</span> to here from you
            </p>
            <p className="sub-ftr-head">stay connected with us</p>
          </div>
          <div className="row pt-3">
            <div className="col-md-5">
              <div className="address-container">
                <ul className="ftr-ul">
                  <li className="ftr-list india-office">
                    <img src={India} alt="" className="pe-3" /> India Office
                  </li>
                  <li className="ftr-list">ACS Networks & Technologies,</li>
                  <li className="ftr-list">
                    Negi Tower, Dhorankhas, Sahastradhara Rd,
                  </li>
                  <li className="ftr-list">near Sethi Petrol Pump, Dehradun</li>
                  <li className="ftr-list view-map">
                    <a
                      href="https://goo.gl/maps/DpoaswgJWdjgLcBp6"
                      target="_blank"
                    >
                      View <i class="fa-solid fa-location-dot"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="address-container">
                <ul className="ftr-ul">
                  <li className="ftr-list india-office">
                    <img src={US} alt="" className="pe-3" /> US Office
                  </li>
                  <li className="ftr-list">39 cedar St,</li>
                  <li className="ftr-list">Jersey City</li>
                  <li className="ftr-list">New Jersey 07305</li>
                  <li className="ftr-list view-map">
                    <a
                      href="https://goo.gl/maps/WAK5Wcf5z8e4xKsJ9"
                      target="_blank"
                    >
                      View <i class="fa-solid fa-location-dot"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 d-none d-sm-none d-md-block d-lg-block d-xl-block text-end">
              <div className="row">
                <div className="col-sm-3">
                  <a
                    href="https://www.upwork.com/agencies/~014072c3ea1dc1505f"
                    target="_blank"
                  >
                    <img src={upwork} alt="" className="upwrk" />
                  </a>
                </div>
                <div className="col-sm-3">
                  <a
                    href="https://www.facebook.com/ACS-Technologies-106353348547515"
                    target="_blank"
                  >
                    <i className="fa-brands fa-facebook-f ftr-i"></i>
                  </a>
                </div>
                <div className="col-sm-3">
                  <a
                    href="https://www.linkedin.com/company/acstechnologies-official/"
                    target="_blank"
                  >
                    <i className="fa-brands fa-linkedin-in ftr-i"></i>
                  </a>
                </div>
                <div className="col-sm-3">
                  <a
                    href="https://www.instagram.com/acs_technologies/"
                    target="_blank"
                  >
                    <i className="fa-brands fa-instagram ftr-i"></i>
                  </a>
                </div>
              </div>
              <div className="row text-end pt-4 justify-content-end">
                <div className="col-sm-3">
                  <a
                    href="https://dribbble.com/ACSTechnologies"
                    target="_blank"
                  >
                    <i className="fa-brands fa-dribbble ftr-i"></i>
                  </a>
                </div>
                <div className="col-sm-3">
                  <a
                    href="https://www.behance.net/acstechnologies"
                    target="_blank"
                  >
                    <i className="fa-brands fa-behance ftr-i"></i>
                  </a>
                </div>
                <div className="col-sm-3">
                  <a
                    href="https://in.pinterest.com/acstechnologies2021/"
                    target="_blank"
                  >
                    <i className="fa-brands fa-pinterest ftr-i"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-3 d-sm-block d-md-none d-lg-none d-xl-none ">
              <div className="social-icon-sm">
                <a
                  href="https://www.upwork.com/agencies/~014072c3ea1dc1505f"
                  target="_blank"
                >
                  <img src={upwork} alt="" className="upwrk" />
                </a>
                <a
                  href="https://www.facebook.com/ACS-Technologies-106353348547515"
                  target="_blank"
                >
                  <i className="fa-brands fa-facebook-f ftr-i"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/acstechnologies-official/"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin-in ftr-i"></i>
                </a>
                <a
                  href="https://www.instagram.com/acs_technologies/"
                  target="_blank"
                >
                  <i className="fa-brands fa-instagram ftr-i"></i>
                </a>
              </div>
              <div className="social-icon-sm ">
                <a href="https://dribbble.com/ACSTechnologies" target="_blank">
                  <i className="fa-brands fa-dribbble ftr-i"></i>
                </a>
                <a
                  href="https://www.behance.net/acstechnologies"
                  target="_blank"
                >
                  <i className="fa-brands fa-behance ftr-i"></i>
                </a>
                <a
                  href="https://in.pinterest.com/acstechnologies2021/"
                  target="_blank"
                >
                  <i className="fa-brands fa-pinterest ftr-i"></i>
                </a>
                <span></span>
              </div>
            </div>
          </div>
          <div className="copyright-sec mt-4">
            <p className="mb-0">
              Copyright © 2021 ACS Networks(Aadira Cyber Systems Networks &
              Technologies Pvt. Ltd.). All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
