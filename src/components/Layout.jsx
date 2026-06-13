import { Outlet } from 'react-router-dom';
import TopHeader from './TopHeader';
import Navigation from './Navigation';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="app">
      <TopHeader />
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}
