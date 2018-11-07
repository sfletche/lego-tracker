import React from 'react';

import Client from "./Client";
import LegoTableRow from './LegoTableRow';

export default class LegoTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { legos: [] };
  }

  async componentDidMount() {
    Client.getLegoList(summary => {
      this.setState({
        legos: summary.content.list,
      });
    });
  }

  render() {
    const { history } = this.props;
    const { legos } = this.state;
    return !!legos.length && (
      <div className="table--center">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Completed</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {legos.map(lego => <LegoTableRow lego={lego} history={history} key={lego.id} />)}
          </tbody>
        </table>
      </div>
    )
  }
}
