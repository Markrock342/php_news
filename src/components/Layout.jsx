import { Outlet } from 'react-router-dom';
import TopBar from './TopBar';
import TopHeader from './TopHeader';
import Navigation from './Navigation';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="app">
      <TopBar />
      <TopHeader />
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}
