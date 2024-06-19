import { Route, Switch } from "wouter";
import HomePage from "./pages/Home";
import Algorithm from "./pages/Algorithm";
import "./App.css";

function App() {
  return (
    <>
      <Switch>
        <Route component={HomePage} path="/" />
        <Route component={Algorithm} path="/algorithm"/>
      </Switch>
    </>
  );
}

export default App;
