import React from "react";

function InstanceShop(props) {
  props.setTitle("InstanceShop");
  return (
    <div>
      <br />
      <p className="paragraph">
        {" "}
        Final Project ของวิชา Database System ซึ่งเรียนตอนปี 3 เป็นเว็บไซต์สไตล์
        Ecommerce แบบง่าย ๆ ที่มีฟังก์ชันการสมัครสมาชิก ลงสินค้า เลือกซื้อสินค้า
        ที่จาลองขึ้นมา (เป็นแค่การ query ข้อมูลใน database
        ไม่ได้มีระบบตัดเงินหรือส่งสินค้าจริง ๆ) โดยส่วน Front-end ใช้ React
        (+Redux) ส่วน Back-end ใช้ Node.js และ MySQL ในส่วนของ Database
      </p>
      <br />
      <h2>Screenshot</h2>
      <br />
      <img
        src="https://user-images.githubusercontent.com/6850971/50582217-47da9700-0e93-11e9-80ac-a956b44658c3.jpg"
        width="90%"
        alt=""
      />
      <img
        src="https://user-images.githubusercontent.com/6850971/50582215-47da9700-0e93-11e9-90ad-1981723e67e6.jpg"
        width="90%"
        alt=""
      />
      <img
        src="https://user-images.githubusercontent.com/6850971/50582216-47da9700-0e93-11e9-9195-164ff4c8196d.jpg"
        width="90%"
        alt=""
      />
      <h3>Github Repository</h3>
      <a href="https://github.com/iamsirid/instance-shop">
        https://github.com/iamsirid/instance-shop
      </a>
    </div>
  );
}

export default InstanceShop;
