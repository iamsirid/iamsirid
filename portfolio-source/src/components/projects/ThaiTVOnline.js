import React from "react";
import thaitvonlinePic1 from "../../res/img/screenshot/thaitvonline1.png";
import thaitvonlinePic2 from "../../res/img/screenshot/thaitvonline2.png";
import thaitvonlinePic3 from "../../res/img/screenshot/thaitvonline3.png";

function ThaiTVOnline(props) {
  props.setTitle("ThaiTVOnline");
  return (
    <div className="thaitvonline">
      <br />
      <p className="paragraph">
        แอพพลิเคชั่น Android ใช้สำหรับดูทีวีออนไลน์ สร้างโดยใช้ MIT App Inventor
        และนำขึ้นเผยแพร่บน Android Market (ชื่อเก่าของ Google Play Store)
        มียอดการติดตั้งจากผู้ใช้งานจริงประมาณ 4 แสนกว่าครั้ง
      </p>

      <br />
      <div className="screenshot">
        <div className="left-side">
          <img src={thaitvonlinePic1} width="90%" alt="" />
        </div>
        <div className="right-side">
          <img src={thaitvonlinePic2} width="90%" alt="" />
          <img src={thaitvonlinePic3} width="90%" alt="" />
        </div>
      </div>
      <br />
      <p>
        ปัจจุบันแอพไม่ได้เผยแพร่บน Google Play แล้ว
        เนื่องจากตัวแอพพลิเคชั่นต้องพึ่ง Server ในการ Streaming content ซึ่ง
        Server ดั่งกล่าวไม่ได้มีการเข้าไปดูแลและต่ออายุอีกต่อไปแล้ว
      </p>
    </div>
  );
}

export default ThaiTVOnline;
