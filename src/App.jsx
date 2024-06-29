import { Route, Switch } from "wouter";
import HomePage from "./pages/Home";
import Algorithm from "./pages/Algorithm";
import Complexity from "./pages/Complexity";
import Contact from "./pages/Contact";
import SearchPatternPage from "./pages/SearchPattern"
import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState(''); 

  return (
    <>
      <Switch>
        <Route path="/">
          <HomePage setInputValue={setInputValue} />
        </Route>
        <Route path="/algorithm">
          <Algorithm />
        </Route>
        <Route path="/search-pattern">
          <SearchPatternPage inputValue={inputValue} />
        </Route>
        <Route path="/complexity">
          <Complexity />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </>
  );
}

export default App;
