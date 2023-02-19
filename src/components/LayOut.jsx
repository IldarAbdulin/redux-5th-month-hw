import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';

export const LayOut = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};
