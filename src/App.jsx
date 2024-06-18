import { Route, Switch } from "wouter";
import HomePage from "./pages/Home";
import "./App.css";

function App() {
  return (
    <>
      <Switch>
        <Route component={HomePage} path="/" />
      </Switch>
    </>
  );
}

export default App;
