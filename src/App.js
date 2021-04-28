import React from "react";
import { Switch, Route } from "react-router-dom";

import Application from "./components/Application";
import SaveLog from "./components/log/SaveLog";
import LogListPage from "./components/log/LogListPage";
import LogModal from "./components/log/LogModal";
import UserProvider from "./context/UserProvider";
import CalcProvider from "./context/CalcProvider";
import LogProvider from "./context/LogProvider";
import background from "./assets/img/bg.png";
import NavBar from "./components/UI/NavBar";
import PageNotFound from "./components/PageNotFound";


function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <LogProvider>
        <CalcProvider>
          <UserProvider>
            {/* <Route>
              <Route path="/" component={NavBar} />
            </Route> */}
            <NavBar />
            <Switch>
              <Route exact path="/" component={Application} />
              <Route exact path="/savelog" component={SaveLog} />
              <Route exact path="/mylogs" component={LogListPage} />
              <Route exact path="/mylogs/:id" component={LogModal} />
              <Route component={PageNotFound} />
            </Switch>
          </UserProvider>
        </CalcProvider>
      </LogProvider>
    </div>
  );
}
export default App;
