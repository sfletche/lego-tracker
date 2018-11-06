import React from 'react';

import LegoTableRow from './LegoTableRow';

export default function LegoTable({ legos }) {
  return (
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
          {legos.map(lego => <LegoTableRow lego={lego} key={lego.id} />)}
        </tbody>
      </table>
    </div>
  )
}
