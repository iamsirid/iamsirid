import React from 'react';
import chulaLearnhubIcon from '../res/img/icon/chula-learnhub.png';
import futureskillIcon from '../res/img/icon/futureskill.png';
import instanceShopIcon from '../res/img/icon/instanceshop.png';
import pRpgIcon from '../res/img/icon/prpg.png';
import smsToControlIcon from '../res/img/icon/smstocontrol.png';
import firstUnityGameIcon from '../res/img/icon/funitygame.png';
import thaiTvOnlineIcon from '../res/img/icon/thaitvonline.png';

import html5Icon from '../res/img/icon/HTML5_Logo_512.png';
import cssIcon from '../res/img/icon/css.png';
import jsIcon from '../res/img/icon/js.png';
import reactIcon from '../res/img/icon/react-512.png';
import reduxIcon from '../res/img/icon/redux-283024.png';
import nodeIcon from '../res/img/icon/node.png';
import mongodbIcon from '../res/img/icon/mongodb.png';

import { useHistory } from 'react-router-dom';

const Right = (props) => {
  const history = useHistory();
  return (
    <div className="right">
      <div className="header">
        <div className="fullname">Sirid Rodsuteewat</div>
        <div className="status">Software Engineer</div>
      </div>

      <div className="education">
        <div className="title-bar">Education</div>
        <div className="school">
          <div className="title">Chulalongkorn University</div>
          <div className="desc">
            August 2016 - 2020: Bachelor in computer engineering <br />
            {/* GPAX 3.32 ( 6 Semesters ) */}
          </div>
        </div>
        <div className="school">
          <div className="title">Nawaminthrachinuthit Bodindecha School</div>
          <div className="desc">
            2010 - 2016 : Enrichment program of science mathematics technology
            and environment
          </div>
        </div>
      </div>
      <div className="projects">
        <div className="title-bar">Projects & Experiences</div>
        <div
          className="project"
          onClick={() => history.push('/detail/chula-learnhub')}
        >
          <div className="icon">
            <img src={chulaLearnhubIcon} alt="" />
          </div>
          <div className="info">
            <div className="title">2020 - Chula LearnHub - Senior Project</div>
            <div className="desc">
              Online learning platforms for Chula students
            </div>
          </div>
        </div>
        <div
          className="project"
          onClick={() => history.push('/detail/futureskill')}
        >
          <div className="icon">
            <img src={futureskillIcon} alt="" />
          </div>
          <div className="info">
            <div className="title">
              2019 - Front-end Developer Intern at FutureSkill
            </div>
            <div className="desc">
              Online learning platforms using Next.js (server-side rendering
              <br />
              React.js)
            </div>
          </div>
        </div>
        <div
          className="project"
          onClick={() => history.push('/detail/instance-shop')}
        >
          <div className="icon">
            <img src={instanceShopIcon} alt="" />
          </div>
          <div className="info">
            <div className="title">2018 - InstanceShop</div>
            <div className="desc">
              Ecommerce-like website using React, Node.js and MySQL
            </div>
          </div>
        </div>
        <div className="project" onClick={() => history.push('/detail/prpg')}>
          <div className="icon">
            <img src={pRpgIcon} alt="" />
          </div>
          <div className="info">
            <div className="title">2017 - pRPG</div>
            <div className="desc">
              2D Turn-based RPG game using Java and JavaFX
            </div>
          </div>
        </div>
        <div
          className="project"
          onClick={() => history.push('/detail/smstocontrol')}
        >
          <div className="icon">
            <img src={smsToControlIcon} alt="" />
          </div>
          <div className="info">
            <div className="title">2015 - SMSToControl</div>
            <div className="desc">
              Android application for control smartphone via SMS
            </div>
          </div>
        </div>
        <div
          className="project"
          onClick={() => history.push('/detail/funitygame')}
        >
          <div className="icon">
            <img src={firstUnityGameIcon} alt="" />
          </div>
          <div className="info">
            <div className="title">2014 - First Unity Game</div>
            <div className="desc">
              High school game project using Unity game engine
            </div>
          </div>
        </div>
        <div
          className="project"
          onClick={() => history.push('/detail/thaitvonline')}
        >
          <div className="icon">
            <img src={thaiTvOnlineIcon} alt="" />
          </div>
          <div className="info">
            <div className="title">2011 - ThaiTVOnline</div>
            <div className="desc">Real-time TV application for android</div>
          </div>
        </div>
        <div className="moreinfo-hint">
          Click on the project to see more information.
        </div>
        <div className="timeline-line"></div>
      </div>
      <div className="technical-skills">
        <div className="title-bar">Technical Skills</div>
        <div className="skills">
          <div className="skills-left">
            <div className="skill">
              <img src={html5Icon} alt="HTML" />
              HTML
            </div>
            <div className="skill">
              <img src={cssIcon} alt="CSS" />
              CSS
            </div>
            <div className="skill">
              <img src={jsIcon} alt="Javascript" />
              Javascript
            </div>
            <div className="skill">
              <img src={reactIcon} alt="ReactJS" />
              ReactJS
            </div>
          </div>
          <div className="skills-right">
            <div className="skill">
              <img src={reduxIcon} alt="Redux" />
              Redux
            </div>
            <div className="skill">
              <img src={nodeIcon} alt="NodeJs" />
              NodeJs
            </div>
            <div className="skill">
              <img src={mongodbIcon} alt="MongoDB" />
              MongoDB
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Right;
