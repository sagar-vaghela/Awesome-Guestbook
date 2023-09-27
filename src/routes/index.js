import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROOT_ROUTE } from '../lib';
import GuestDetails from '../component/guestDetails';

const GuestBookRoutes = () => {
  return (
    <Routes>
      <Route path={ROOT_ROUTE} element={<GuestDetails />} />
    </Routes>
  );
};

export default GuestBookRoutes;
