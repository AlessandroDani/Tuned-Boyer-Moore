import { Route, Switch } from "wouter";
import HomePage from "./pages/Home";
import Algorithm from "./pages/Algorithm";
import "./App.css";
import Complexity from "./pages/Complexity";

function App() {
  return (
    <>
      <Switch>
        <Route component={HomePage} path="/" />
        <Route component={Algorithm} path="/algorithm"/>
        <Route component={Complexity} path="/complexity"/>
      </Switch>
    </>
  );
}

export default App;
