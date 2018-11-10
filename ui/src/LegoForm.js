import React from 'react';

import Client from "./Client";

export default class LegoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { details: {} };
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
    return (
      <div>
        <div>Lego Form</div>
        <form>
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
          <input type="submit" value="Submit" />
        </form>
        <div onClick={() => history.push('/')}>Back</div>
      </div>
    );
  }
}
