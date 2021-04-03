// import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Application from "./components/Application";
import UserProvider from "./context/UserProvider";
import CalcProvider from "./context/CalcProvider";
import LogProvider from "./context/LogProvider";
import background from "./assets/img/bg1.png";
import NavBar from "./components/UI/NavBar";
import SaveLog from "./components/log/SaveLog";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <LogProvider>
        <CalcProvider>
          <UserProvider>
            <Route>
              <Route path="/" component={NavBar} />
            </Route>
            <Switch>
              <Route exact path="/" component={Application} />
            </Switch>
          </UserProvider>
        </CalcProvider>
      </LogProvider>
    </div>
  );
}
export default App;
