import React from 'react';

import Client from "./Client";

export default class LegoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { details: {} };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    Client.getLegoDetails(response => {
      this.setState({
        details: response.content,
      });
    }, this.props.match.params.id);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    Client.setLegoDetails(response => {
      this.setState({
        details: response.content,
      });
    }, data);
  }

  render() {
    const { history } = this.props;
    const { details } = this.state;
    return (
      <div>
        <div>Lego Form</div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              ID:
              <input type="text" value={details.id} name="id" />
            </label>
          </div>
          <div>
            <label>
              Name:
              <input type="text" value={details.name} name="name" />
            </label>
          </div>
          <div>
            <label>
              Completed:
              <input type="text" value={details.completed} name="name" />
            </label>
          </div>
          <button>Submit</button>
        </form>
        <div onClick={() => history.push('/')}>Back</div>
      </div>
    );
  }
}
