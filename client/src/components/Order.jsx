import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Order = (props) => {
  const [id, setId] = useState(props.match.params.id);
  const [logoURL, setLogoURL] = useState('https://mg-fec-prch-images.s3-us-west-1.amazonaws.com/imgnotfound.png');
  const [name, setName] = useState(`Humble ${id} Bundle`);
  const [minimum, setMinimum] = useState(1);
  const getOwnedData = (id) => {
    const config = {
      url: `http://localhost:4884/bundleInfo/${id}`,
    }
    if (parseInt(id) >= 1 && parseInt(id) <= 100) {
      return axios(config)
      .then(({ data }) => {
        if (data) {
          setLogoURL(data.logoURL);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    }
  };
  const getDescData = (id) => {
    const config = {
      url: `http://localhost:3663/bundleInfo/${id}`,
    }
    if (parseInt(id) >= 1 && parseInt(id) <= 100) {
      return axios(config)
      .then(({ data }) => {
        if (data) {
          setName(data.name);
          setMinimum(data.minimum);
        }
      })
      .catch((err) => {
        return;
      });
    }
  };

  useEffect(() => {
    getOwnedData(id);
    getDescData(id);
  })

  if (parseInt(id) >= 1 && parseInt(id) <= 100) {
    return (
      <div>
        <div>your id is {id}</div>
        <div className="desc-data">the bundle name is {name} and the minimum price is {minimum}</div>
        <img src={logoURL} alt='image not found'></img>
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
