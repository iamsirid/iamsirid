import React from "react";
import smsToControlPic1 from "../../res/img/screenshot/smstocontrol1.png";
import smsToControlPic2 from "../../res/img/screenshot/smstocontrol2.png";
import smsToControlPic3 from "../../res/img/screenshot/smstocontrol3.png";
import smsToControlPic4 from "../../res/img/screenshot/smstocontrol4.png";

function SMSToControl(props) {
  props.setTitle("SMSToControl");
  return (
    <div className="smstocontrol">
      <br />
      <p className="paragraph">
        แอพพลิเคชั่น Android สำหรับใช้ควบคุมเครื่องจากระยะไกลด้วยคำสั่งจาก SMS
        พัฒนาด้วยภาษา Java โดยทำเป็นโครงงานคอมพิวเตอร์ ชั้นมัธยมศึกษาปีที่ 6
        และได้รับรางวัลชนะเลิศ
        โครงงานยอดเยี่ยมจากการประกวดการนำเสนอโครงงานโครงการห้องเรียนพิเศษวิทย์ฯ
        เครือข่ายภาคกลางตอนบน และเผยแพร่บน Google Play Store
      </p>

      <br />
      <div className="screenshot">
        <img src={smsToControlPic1} width="30%" alt="" />
        <img src={smsToControlPic2} width="30%" alt="" />
        <img src={smsToControlPic3} width="30%" alt="" />
        <img src={smsToControlPic4} width="90%" alt="" />
      </div>

      <h3>ลิงค์สำหรับดาวน์โหลดแอพพลิเคชั่นบน Google Play</h3>
      <a
        href="https://play.google.com/store/apps/details?id=com.iamsirid.smstocontrol"
        className="unavalible-link"
      >
        https://play.google.com/store/apps/details?id=com.iamsirid.smstocontrol
      </a>
      <p>
        Update: ปัจจุบันแอพไม่ได้เผยแพร่บน Google Play แล้ว เนื่องจากติด Policy
        ใหม่ของ Android เรื่องสิทธื์ในการอ่าน SMS
      </p>
    </div>
  );
}

export default SMSToControl;
