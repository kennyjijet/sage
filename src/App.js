import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import MainLayout from "./pages/MainLayout";

import "./App.css";
import store from "./store";

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={MainLayout} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}
export default App;
