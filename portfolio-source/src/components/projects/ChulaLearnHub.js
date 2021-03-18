import React from 'react';
import chulaLearnHubPic1 from '../../res/img/screenshot/chulalearnhub1.png';
import chulaLearnHubPic2 from '../../res/img/screenshot/chulalearnhub2.png';
import chulaLearnHubPic3 from '../../res/img/screenshot/chulalearnhub3.png';

function ChulaLearnHub(props) {
  props.setTitle('Chula LearnHub - Senior Project');
  return (
    <div>
      <br />
      <p className="paragraph">
        Senior Project ในหลักสูตรวิศวกรรมคอมพิวเตอร์ จุฬาลงกรณ์มหาวิทยาลัย
        โดยทำเป็นระบบศูนย์กลางการแบ่งปันเนื้อหาการเรียนการสอนของนิสิตจุฬา ฯ
        ในรูปแบบของเว็บไซต์เพื่อให้นิสิตจุฬา ฯ
        ได้ใช้เป็นศูนย์กลางการแบ่งปันข้อมูลเนื้อหาการเรียนต่าง ๆ
        โดยให้นิสิตผู้ที่ได้ลงทะเบียนเรียนวิชาหนึ่ง ๆ
        ได้แบ่งปันเนื้อหาการเรียนไม่ว่าจะเป็นในรูปแบบของเอกสารอิเล็กโทรนิค,
        คลิปเสียง หรือคลิปวิดีโอที่ทำการบันทึกจากการเรียนมาแบ่งปันให้นิสิตอื่น ๆ
        ที่ไม่ได้ลงทะเบียนเรียนวิชานั้น ๆ โดยได้ใช้เทคโนโลยี React ในส่วนของ
        Front-end, Node.js ในส่วนของ Back-end, MongoDB ในการทำ Database,
        Firebase ในส่วนของการ Hosting, Amazon AWS S3 ในการทำ storage (เก็บไฟล์
        pdf, video, audio etc.) และใช้ระบบยืนยันตัวตนของนิสิตด้วยข้อมูลประจำตัว
        (รหัสประจำตัวและรหัสผ่าน) ผ่าน Chula SSO
        <br />
        {/* <br /> */}
        {/* ป.ล. ตอนนี้ตัวโปรเจคยังอยู่ในแค่ช่วงเริ่มต้น ยังไม่เสร็จสมบูรณ์ดี */}
      </p>

      <br />
      <h2>Screenshot</h2>
      <br />
      <div className="screenshot">
        <img src={chulaLearnHubPic1} width="100%" alt="" />
        <img src={chulaLearnHubPic2} width="100%" alt="" />

        <img src={chulaLearnHubPic3} width="100%" alt="" />
      </div>
    </div>
  );
}

export default ChulaLearnHub;
