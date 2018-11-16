import React from 'react';

import Client from "./Client";

export default class LegoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { details: {} };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    Client.getLegoDetails(response => {
      this.setState({
        details: response.content,
      });
    }, this.props.match.params.id);
  }

  handleChange(event) {
    const { details } = this.state;
    const key = event.target.name;
    this.setState({ details: {
      ...details,
      [key]: event.target.value
    }});
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = this.state.details;
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
              <input type="text" value={details.id} name="id" onChange={this.handleChange} />
            </label>
          </div>
          <div>
            <label>
              Name:
              <input type="text" value={details.name} name="name" onChange={this.handleChange} />
            </label>
          </div>
          <div>
            <label>
              Completed:
              <input type="text" value={details.completed} name="completed" onChange={this.handleChange} />
            </label>
          </div>
          <button>Submit</button>
        </form>
        <div onClick={() => history.push('/')}>Back</div>
      </div>
    );
  }
}
