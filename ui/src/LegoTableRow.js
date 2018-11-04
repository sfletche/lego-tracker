import React from 'react';


export default function LegoTableRow({ lego }) {
  return (
    <tr key={lego.id}>
      <td>{lego.id}</td>
      <td>{lego.name}</td>
      <td>{lego.completed}</td>
    </tr>
  );
}
