import Sidebar from './Sidebar';
import '../App.css';

export default function MainWithSidebar({ children, sidebarVariant = 'default' }) {
  return (
    <main className="main">
      <div className="container">
        <div className="main-layout">
          <div className="main-content">{children}</div>
          <Sidebar variant={sidebarVariant} />
        </div>
      </div>
    </main>
  );
}
