import React from "react";
import fUnityGamePic1 from "../../res/img/screenshot/funitygame1.png";
import fUnityGamePic2 from "../../res/img/screenshot/funitygame2.png";
import fUnityGamePic3 from "../../res/img/screenshot/funitygame3.png";
import fUnityGamePic4 from "../../res/img/screenshot/funitygame4.png";
import fUnityGamePic5 from "../../res/img/screenshot/funitygame5.png";

function SMSToControl(props) {
  props.setTitle("First Unity Game");
  return (
    <div>
      <br />
      <p className="paragraph">
        เกมแนว Turn-based RPG สร้างโดยใช้ Unity game engine ซึ่งเป็น Project
        ของวิชาคอมพิวเตอร์ ชั้นมัธยมศึกษาปีที่ 4
      </p>

      <br />
      <div className="screenshot">
        <img src={fUnityGamePic1} width="90%" alt="" />
        <img src={fUnityGamePic2} width="30%" alt="" />
        <img src={fUnityGamePic3} width="30%" alt="" />
        <img src={fUnityGamePic4} width="30%" alt="" />
        <img src={fUnityGamePic5} width="50%" alt="" />
      </div>

      <h3>ลิงค์สำหรับดาวน์โหลดตัวเกม</h3>
      <a href="https://mega.co.nz/#!eA0m1CZC!ub2QDrrdz7WFMoBRqN3ogOiU328MQqTdm1r886fCXAk">
        https://mega.co.nz/#!eA0m1CZC!ub2QDrrdz7WFMoBRqN3ogOiU328MQqTdm1r886fCXAk
      </a>
    </div>
  );
}

export default SMSToControl;
