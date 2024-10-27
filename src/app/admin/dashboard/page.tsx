'use client';

import React, { useState } from 'react';

export interface IProduct {
  _id: string;
  imgSrc: string;
  fileKey: string;
  name: string;
  price: string;
  category: string;

}

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [openPopup, setOpenPipup] = useState(false);
  const [updateTable, setUpdateTable] = useState(false);

  return (
    <div className='bg-yellow-800'>Dashboard</div>
  );
};

export default Dashboard;