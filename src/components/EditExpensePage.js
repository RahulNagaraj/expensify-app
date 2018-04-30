import React from 'react';

const EditExpensePage = (props) => (
  <div>
    <p>This is edit expense component. Id: {props.match.params.id}</p>
  </div>
);

export default EditExpensePage;
