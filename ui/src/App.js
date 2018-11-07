import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import LegoTable from './LegoTable';
import LegoForm from './LegoForm';

import './App.css';

const Tech = ({ match }) => {
  return <div>Current Route: {match.params.tech}</div>
};

class App extends Component {
  constructor(props) {
    super(props);
    library.add(faEdit);
    library.add(faTrashAlt);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <h1>LEGO Summary</h1>
          <Route exact path="/" render={(props) => <LegoTable {...props} />} />
          <Route path="/edit/:id" render={(props) => <LegoForm {...props} />} />
          <Route path="/:tech" component={Tech} />
        </div>
      </Router>
    );
  }
}
export default App;
