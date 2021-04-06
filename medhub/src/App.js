import Body from "./components/Body";
import Header from "./components/Header";
import "./style/style.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="cover">
        <Header />
        <Switch>
          <Route exact path="/">
            Home
          </Route>
          <Route exact path="/about">
            About
          </Route>
          <Route exact path="/contact">
            Contact
          </Route>
          <Route exact path="/join">
            <Body />
          </Route>
          <Route path="">404 error</Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
