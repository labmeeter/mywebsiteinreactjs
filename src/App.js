import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
