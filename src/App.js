import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import HomePage from "./Home/HomePage";
import { useEffect } from "react";
import { app_data_config } from "./app_config";
function App() {
  useEffect(() => {
    document.title = app_data_config[0].company;
  }, []);
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={Login} />

          <Route exact path="/dashboard" component={Dashboard} />
          <Route component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
