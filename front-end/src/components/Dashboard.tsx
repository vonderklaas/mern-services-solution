import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export const Dashboard = () => {
  return (
    <>
      <Header />
      <div className='dash-container'>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
