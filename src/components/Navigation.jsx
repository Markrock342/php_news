import { NavLink, Link } from 'react-router-dom';
import { NAV_ITEMS } from '../data/articles';
import './Navigation.css';

export default function Navigation() {
  return (
    <nav className="navigation" aria-label="เมนูหลัก">
      <div className="container navigation__inner">
        <ul className="navigation__list">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `navigation__link${isActive ? ' navigation__link--active' : ''}`
                }
                end={item.path === '/'}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <Link to="/articles" className="navigation__search" aria-label="ค้นหา">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </Link>
      </div>
    </nav>
  );
}
