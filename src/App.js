// import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Application from "./components/Application";
import UserProvider from "./context/UserProvider";
import CalcProvider from "./context/CalcProvider";
import LogProvider from "./context/LogProvider";
import background from "./assets/img/bg1.png";
import Test from "./components/Test";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <LogProvider>
        <CalcProvider>
          <UserProvider>
            <Switch>
              <Route exact path="/" component={Application} />
              {/* <Route path="/test" component={Test} /> */}
            </Switch>
          </UserProvider>
        </CalcProvider>
      </LogProvider>
    </div>
  );
}
export default App;
