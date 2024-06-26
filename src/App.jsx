import { Route, Switch } from "wouter";
import HomePage from "./pages/Home";
import Algorithm from "./pages/Algorithm";
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
      </Switch>
    </>
  );
}

export default App;
