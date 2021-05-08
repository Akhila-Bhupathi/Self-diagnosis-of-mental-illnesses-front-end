import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/contact">
          <About/>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
