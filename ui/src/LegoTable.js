import React from 'react';

import LegoTableRow from './LegoTableRow';

export default function LegoTable({ legos }) {
  return (
    <div class="table--center">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {legos.map(lego => <LegoTableRow lego={lego} />)}
        </tbody>
      </table>
    </div>
  )
}
