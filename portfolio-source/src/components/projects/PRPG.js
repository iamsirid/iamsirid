import React from "react";
import pRPGPic1 from "../../res/img/screenshot/prpg1.png";
import pRPGPic2 from "../../res/img/screenshot/prpg2.png";
import pRPGPic3 from "../../res/img/screenshot/prpg3.png";
function PRPG(props) {
  props.setTitle("pRPG");
  return (
    <div className="prpg">
      <br />
      <p className="paragraph">
        เกมแนว 2D Turn-based RPG เขียนโดยใช้ภาษา Java และ JavaFx โดยเป็น Final
        project ของวิชา Programming Methodology ซึ่งเรียนตอนปี 2
      </p>
      <br />
      <h2>Screenshot</h2>
      <br />
      <div className="screenshot">
        <div className="left-side">
          <img src={pRPGPic1} width="90%" alt="" />
        </div>
        <div className="right-side">
          <img src={pRPGPic2} width="100%" alt="" />
          <br />
          <br />

          <img src={pRPGPic3} width="100%" alt="" />
        </div>
      </div>

      <h3>รายละเอียดเพิ่มเติม</h3>
      <p>รายละเอียดเพิ่มเติมสามารถอ่านได้จาก Official report</p>
      <a href="https://drive.google.com/open?id=1PwP0fOT7ylk30Wc-Q8uc8-q10J-jQ56M">
        https://drive.google.com/open?id=1PwP0fOT7ylk30Wc-Q8uc8-q10J-jQ56M
      </a>
      <br />
      <br />
      <iframe
        src="https://drive.google.com/file/d/1PwP0fOT7ylk30Wc-Q8uc8-q10J-jQ56M/preview"
        width="100%"
        height="700"
      ></iframe>
      <p>ลิงค์สำหรับดาวน์โหลดตัวเกม</p>
      <a href="https://drive.google.com/open?id=1mZz3n0pOoInVAcXfQAQeVSUaKKyX9gkF">
        https://drive.google.com/open?id=1mZz3n0pOoInVAcXfQAQeVSUaKKyX9gkF
      </a>
    </div>
  );
}

export default PRPG;
