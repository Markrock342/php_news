import { Link } from 'react-router-dom';
import './TopBar.css';

export default function TopBar() {
  const today = new Date().toLocaleDateString('th-TH', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="top-bar">
      <div className="container top-bar__inner">
        <span className="top-bar__date">{today}</span>

        <div className="top-bar__links">
          <Link to="/contact">About Us</Link>
          <span className="top-bar__sep">|</span>
          <Link to="/contact">Contact</Link>
          <span className="top-bar__sep">|</span>
          <a href="mailto:ads@marketimes.asia">PR News</a>
        </div>
      </div>
    </div>
  );
}
