import React from "react";

import slider1 from "../images/email-marketing/slider.jpg";
import Second from "../images/email-marketing/second.jpg";
import Third from "../images/email-marketing/third.jpg";
import Fourth from "../images/email-marketing/fourth.jpg";
import Fifth from "../images/email-marketing/fifth.jpg";

const EmailMarketing = () => {
  return (
    <div>
      <div className="email-marketing-sec">
        <img src={slider1} alt="" />

        <img src={Second} alt="" />
        <img src={Third} alt="" />
        <img src={Fourth} alt="" />
        <img src={Fifth} alt="" />
      </div>
    </div>
  );
};

export default EmailMarketing;
