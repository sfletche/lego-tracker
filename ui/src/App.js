import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Client from "./Client";

import './App.css';

const Tech = ({ match }) => {
  return <div>Current Route: {match.params.tech}</div>
};

function getRow(lego) {
  return (
    <tr key={lego.id}>
      <td>{lego.id}</td>
      <td>{lego.name}</td>
      <td>{lego.completed}</td>
    </tr>
  );
}

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
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Completed</th>
              </tr>
            </thead>
            <tbody>
              {legos.map(lego => getRow(lego))}
            </tbody>
          </table>
          <Route path="/:tech" component={Tech} />
        </div>
      </Router>
    );
  }
}
export default App;
