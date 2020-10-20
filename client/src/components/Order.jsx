import React, { useState, useEffect } from 'react';

const Order = (props) => {
  const [id, setId] = useState(props.match.params.id);

  return (
    <div>
      <div>your id is {id}</div>
    </div>
  );
};

export default Order;
