import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function LegoTableRow({ lego }) {
  return (
    <tr>
      <td>{lego.id}</td>
      <td>{lego.name}</td>
      <td>{lego.completed}</td>
      <td><FontAwesomeIcon icon="edit" /></td>
      <td><FontAwesomeIcon icon="trash" /></td>
    </tr>
  );
}
