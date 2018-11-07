import React from 'react';


export default function LegoForm({ id, history, match }) {
  return (
    <div>
      <div>Lego Form</div>
      <div>ID: {match.params.id}</div>
      <div onClick={() => history.push('/')}>Back</div>
    </div>
  );
}
