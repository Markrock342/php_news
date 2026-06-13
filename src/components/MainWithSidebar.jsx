import Sidebar from './Sidebar';
import '../App.css';

export default function MainWithSidebar({ children, sidebarVariant = 'default', sidebarProps = {} }) {
  return (
    <main className="main">
      <div className="container">
        <div className="main-layout">
          <div className="main-content">{children}</div>
          <Sidebar variant={sidebarVariant} {...sidebarProps} />
        </div>
      </div>
    </main>
  );
}
