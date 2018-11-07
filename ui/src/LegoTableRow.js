import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function LegoTableRow({ lego, history }) {
  return (
    <tr>
      <td>{lego.id}</td>
      <td>{lego.name}</td>
      <td>{lego.completed}</td>
      <td onClick={() => history.push(`/edit/${lego.id}`)}><FontAwesomeIcon icon="edit" /></td>
      <td onClick={() => history.push('/delete')}><FontAwesomeIcon icon="trash-alt" /></td>
    </tr>
  );
}
