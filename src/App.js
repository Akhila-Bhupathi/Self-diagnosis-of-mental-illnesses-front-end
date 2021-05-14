import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
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
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        
      </Switch>
    </Router>
    </div>
  );
}

export default App;
