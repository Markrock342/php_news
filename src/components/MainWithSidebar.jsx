import AdsBanner from './AdsBanner';
import Sidebar from './Sidebar';
import '../App.css';

export default function MainWithSidebar({ children, showTopAd = true, showPreFooterAd = false }) {
  return (
    <main className="main">
      <div className="container">
        {showTopAd && (
          <AdsBanner variant="leaderboard" className="ads-banner--top" label="Top Banner 728 × 90" />
        )}

        <div className="main-layout">
          <div className="main-content">{children}</div>
          <Sidebar />
        </div>

        {showPreFooterAd && (
          <AdsBanner variant="billboard" className="ads-banner--prefooter" label="Pre-Footer Banner 970 × 250" />
        )}
      </div>
    </main>
  );
}
