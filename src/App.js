import './App.css'
import React from "react";
import { Switch, Route } from "react-router-dom"
import Application from "./components/Application"
import UserProvider from "./context/UserProvider"
import CalcProvider from "./context/CalcProvider"
import LogProvider from "./context/LogProvider"



function App() {
  return (
    <div className="App">
      <LogProvider>
        <CalcProvider>
          <UserProvider>
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
