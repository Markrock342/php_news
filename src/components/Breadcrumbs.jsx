import { Link } from 'react-router-dom';
import { getCategoryPath } from '../utils/routes';
import './Breadcrumbs.css';

export default function Breadcrumbs({ items }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol className="breadcrumbs__list">
        {items.map((item, i) => (
          <li key={item.label} className="breadcrumbs__item">
            {i > 0 && <span className="breadcrumbs__sep">›</span>}
            {item.href ? (
              <Link to={item.href}>{item.label}</Link>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function categoryCrumb(category) {
  return { label: category, href: getCategoryPath(category) };
}
