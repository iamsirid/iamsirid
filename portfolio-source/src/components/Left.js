import React from "react";

import ritAvatar from "../res/img/rit.png";
import telIcon from "../res/img/icon/tel.png";
import emailIcon from "../res/img/icon/email.png";
import githubIcon from "../res/img/icon/github.png";
import linkedinIcon from "../res/img/icon/linkedin.png";
import websiteIcon from "../res/img/icon/website.png";
import addressIcon from "../res/img/icon/address.png";

const Left = props => {
  return (
    <div className="left">
      <div className="photo">
        <img src={ritAvatar} alt="rit" />
      </div>
      <div className="information">
        <div className="tel">
          <img src={telIcon} alt="tel" />
          <a href="tel:0859825437">0859825437</a>
        </div>
        <div className="email">
          <img src={emailIcon} alt="email" />
          <a href="mailto:iamsirid@gmail.com">iamsirid@gmail.com</a>
        </div>
        <div className="github">
          <img src={githubIcon} alt="github" />
          <a href="http://github.com/iamsirid">github.com/iamsirid</a>
        </div>
        <div className="linkedin">
          <img src={linkedinIcon} alt="linkedin" />
          <a href="http://linkedin.com/in/sirid-rodsuteewat">
            linkedin.com/in/sirid-rodsuteewat
          </a>
        </div>
        <div className="website">
          <img src={websiteIcon} alt="website" />
          <a href="http://iamsirid.com">iamsirid.com</a>
        </div>
        <div className="address">
          <img src={addressIcon} alt="address" />
          476/6 Lat Phrao Rd., Saphan Song, Wang Thonglang, Bangkok 10310,
          Thailand
        </div>
      </div>
    </div>
  );
};

export default Left;
