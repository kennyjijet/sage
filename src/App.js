import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { Provider } from 'react-redux';
import MainLayout from './pages/MainLayout';
import About from './pages/About';

import './App.css';
import store from './store';

import './assets/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {}
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={MainLayout} />
            <Route exact path="/about" component={About} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}
export default App;