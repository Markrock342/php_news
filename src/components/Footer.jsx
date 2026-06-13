import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img src="/logo-dark.png" alt="Market Times" className="footer__logo" width="120" height="40" />
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          <Link to="/headline">Headline</Link>
          <Link to="/movement">Movement</Link>
          <Link to="/insight">Insight</Link>
          <Link to="/people">People</Link>
          <Link to="/lifestyle">Lifestyle</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <p className="footer__copy">© 2026 Market Times — Design Mockup</p>
      </div>
    </footer>
  );
}
