import { Route, Switch } from "wouter";
import HomePage from "./pages/Home";
import Algorithm from "./pages/Algorithm";
import SearchPatternPage from "./pages/SearchPattern";
import { useState } from "react";
import "./App.css";
import Complexity from "./pages/Complexity";

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <Switch>
        <Route path="/">
          <HomePage setInputValue={setInputValue} />
        </Route>
        <Route component={Algorithm} path="/algorithm" />
        <Route component={Complexity} path="/complexity" />
        <Route path="/search-pattern">
          <SearchPatternPage inputValue={inputValue} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
