import { Outlet } from 'react-router-dom';
import React from 'react';

export const SharedLayout = () => {
  return (
    <>
      {/* <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          alignItems: 'center',
        }}
      > */}
      <Outlet />
      {/* </div> */}
    </>
  );
};
