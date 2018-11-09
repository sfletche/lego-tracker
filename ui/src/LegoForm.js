import React from 'react';

import Client from "./Client";

export default class LegoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { details: null };
  }

  async componentDidMount() {
    Client.getLegoDetails(response => {
      this.setState({
        details: response.content,
      });
    }, this.props.match.params.id);
  }

  render() {
    const { history } = this.props;
    const { details } = this.state;
    console.log('details', details);
    return details && (
      <div>
        <div>Lego Form</div>
        <div>ID: {details.id}</div>
        <div>Name: {details.name}</div>
        <div>Completed: {details.completed}</div>
        <div onClick={() => history.push('/')}>Back</div>
      </div>
    );
  }
}
