import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Client from "./Client";

import LegoTable from './LegoTable';

import './App.css';

const Tech = ({ match }) => {
  return <div>Current Route: {match.params.tech}</div>
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {title: '', legos: []};
  }

  async componentDidMount() {
    Client.getLegoList(summary => {
      this.setState({
        title: summary.content.title,
        legos: summary.content.list,
      });
    });
  }

  render() {
    const { title, legos } = this.state;
    return (
      <Router>
        <div className="App">
          <h1>{title}</h1>
          <LegoTable legos={legos} />
          <Route path="/:tech" component={Tech} />
        </div>
      </Router>
    );
  }
}
export default App;
