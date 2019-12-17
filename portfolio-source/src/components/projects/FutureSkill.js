import React from "react";
import futureSkillPic1 from "../../res/img/screenshot/futureskill1.png";
import futureSkillPic2 from "../../res/img/screenshot/futureskill2.png";
import futureSkillPic3 from "../../res/img/screenshot/futureskill3.png";

function FutureSkill(props) {
  props.setTitle("FutureSkill - Internship");
  return (
    <div>
      <br />
      <p className="paragraph">
        เป็นการฝึกงานภาคฤดูร้อน ช่วงเดือนมิถุนายนถึงเดือนสิงหาคม 2019
        โดยได้ฝึกงานในตำแหน่ง Front-end Developer ซึ่งมีหน้าที่หลัก ๆ
        คือปรับปรุงแก้ไขหน้าตาของตัวเว็บไซต์ให้เป็นไปตามแนวทาง Design
        ใหม่ที่ทางทีม UX/UI Design ได้ออกแบบไว้ และทำหน้าที่แก้ไข bug
        ที่มีอยู่แล้วในบางส่วนของตัวเว็บ โดยตัวเว็บ FutureSkill ใช้ Next.js
        ซึ่งเป็น server-side rendering React ทำให้ได้เรียนรู้หลักการทำงาน
        server-side rendering ซึ่งก่อนหน้านี้ส่วนตัวจะทำเป็น client-side
        rendering เป็นหลัก รวมทั้งได้มีโอกาสทำงานใกล้ชิดร่วมกับทีม Back-end
        ซึ่งทำการออกแบบ API ของเว็บไซต์ใหม่
        จึงมีโอกาสได้เข้าใจโครงสร้างของเว็บไซต์ที่มีขนาดใหญ่มากขึ้น
      </p>

      <br />
      <h2>Screenshot</h2>
      <br />
      <div className="screenshot">
        หน้าแรกของ FutureSkill
        <br />
        <br />
        <img src={futureSkillPic1} width="100%" alt="" />
        <br />
        <br />
        หน้าแสดงเนื้อหาของคอร์สเรียน ซึ่งเป็นงานหลักที่ได้รับผิดชอบจัดทำ
        <br />
        <br />
        <img src={futureSkillPic2} width="100%" alt="" />
        <br />
        <br />
        <img src={futureSkillPic3} width="100%" alt="" />
      </div>
    </div>
  );
}

export default FutureSkill;
