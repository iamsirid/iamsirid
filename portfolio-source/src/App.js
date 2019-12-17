import React, { useState } from "react";
import "./App.scss";

import Left from "./components/Left";
import Right from "./components/Right";
import Detail from "./components/projects/Detail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  // const [project, setProject] = useState("");
  // const showDetail = project => {
  //   setProject(project);
  // };

  // const content = project ? (
  //   <Detail project={project} resetProject={() => setProject("")} />
  // ) : (
  //   <>
  //     <Left />
  //     <Right showDetail={showDetail} />
  //   </>
  // );

  return (
    <Router basename="/portfolio">
      <div className="main">
        <Switch>
          <Route exact path="/">
            <>
              <Left />
              <Right />
            </>
          </Route>
          <Route path="/detail/:projectId">
            <Detail />
          </Route>
          <Route path="/*">
            <div className="not-found">
              <h1>
                404 Not Found
                <br />- ไม่พบหน้าที่คุณหาใน Portfolio นี้
              </h1>
              <br />
              <p className="paragraph">
                ลองเช็คดูว่าใส่ URL ถูกต้องรึเปล่าครับ
              </p>
            </div>
          </Route>
        </Switch>
        {/* {content} */}
      </div>
    </Router>
  );
}

export default App;
