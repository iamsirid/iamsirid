import React, { useState } from "react";
import ChulaLearnHub from "./ChulaLearnHub";
import FutureSkill from "./FutureSkill";
import InstaceShop from "./InstanceShop";
import PRPG from "./PRPG";
import SMSToControl from "./SMSToControl";
import FirstUnityGame from "./FirstUnityGame";
import ThaiTVOnline from "./ThaiTVOnline";
import { useParams, useHistory } from "react-router-dom";

const Detail = props => {
  const { projectId } = useParams();
  const history = useHistory();
  window.scrollTo(0, 0);
  const [title, setTitle] = useState("ไม่พบโปรเจค");
  const detailComponent = project => {
    switch (project) {
      case "chula-learnhub":
        return <ChulaLearnHub setTitle={setTitle} />;

      case "futureskill":
        return <FutureSkill setTitle={setTitle} />;

      case "instance-shop":
        return <InstaceShop setTitle={setTitle} />;

      case "prpg":
        return <PRPG setTitle={setTitle} />;

      case "smstocontrol":
        return <SMSToControl setTitle={setTitle} />;

      case "funitygame":
        return <FirstUnityGame setTitle={setTitle} />;

      case "thaitvonline":
        return <ThaiTVOnline setTitle={setTitle} />;

      default:
        // setTitle("Not Found");
        return (
          <>
            <br />
            <p className="paragraph">
              ไม่มีพบโปรเจคดั่งกล่าว ลองดูว่า URL ด้านบนถูกต้องรึเปล่าครับ
            </p>
          </>
        );
    }
  };

  return (
    <div className="detail">
      <div className="header">
        <div className="title">
          <h1>{title}</h1>
        </div>
      </div>
      {detailComponent(projectId)}
      <div className="bottom">
        <div className="back-button">
          <button onClick={() => history.push("/")}>Go Back</button>
        </div>
      </div>
    </div>
  );
};
export default Detail;
