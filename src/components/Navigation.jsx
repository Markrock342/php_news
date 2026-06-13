import { NavLink, Link } from 'react-router-dom';
import { NAV_ITEMS } from '../data/articles';
import './Navigation.css';

export default function Navigation() {
  return (
    <nav className="navigation" aria-label="เมนูหลัก">
      <div className="container">
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
      </div>
    </nav>
  );
}
