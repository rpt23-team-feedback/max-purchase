import React, { useState, useEffect } from 'react';

const Order = (props) => {
  const [id, setId] = useState(props.match.params.id);

  if (parseInt(id) >= 1 && parseInt(id) <= 100) {
    return (
      <div>
        <div>your id is {id}</div>
      </div>
    );
  }

  return (
    <div>
      <div>try an ID in the url from 1 - 100</div>
    </div>
  );
};

export default Order;
