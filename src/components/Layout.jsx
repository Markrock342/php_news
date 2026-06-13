import { Outlet } from 'react-router-dom';
import TopBar from './TopBar';
import Navigation from './Navigation';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="app">
      <TopBar />
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}
