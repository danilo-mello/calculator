import './App.css'
import React from "react";
import { Switch, Route } from "react-router-dom"
import Application from "./components/Application"
import UserProvider from "./context/UserProvider"
import CalcProvider from "./context/CalcProvider"



function App() {
  return (
    <div className="App">
      <CalcProvider>
        <UserProvider>
          <Switch>
            <Route exact path="/" component={Application} />
          </Switch>
        </UserProvider>
      </CalcProvider>
    </div>
  );
}
export default App;
