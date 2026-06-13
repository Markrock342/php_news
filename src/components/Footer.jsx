import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo-mark">M</span>
          <div>
            <strong className="footer__name">Marketimes Asia</strong>
            <p className="footer__tagline">ข่าวธุรกิจ · Insight · Movement · People · Lifestyle</p>
          </div>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          <Link to="/headline">Headline</Link>
          <Link to="/movement">Movement</Link>
          <Link to="/insight">Insight</Link>
          <Link to="/people">People</Link>
          <Link to="/lifestyle">Lifestyle</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <p className="footer__copy">© 2026 Marketimes Asia — Design Mockup</p>
      </div>
    </footer>
  );
}
