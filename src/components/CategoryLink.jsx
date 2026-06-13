import { Link } from 'react-router-dom';
import { getCategoryPath, getTagPath } from '../utils/routes';

export function CategoryLink({ category, className = '', outline = false }) {
  const cls = [
    'category-badge',
    outline ? 'category-badge--outline' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Link to={getCategoryPath(category)} className={cls}>
      {category}
    </Link>
  );
}

export function TagLink({ tag, outline = false, className = '' }) {
  const cls = [
    'category-badge',
    outline ? 'category-badge--outline' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Link to={getTagPath(tag)} className={cls}>
      {tag}
    </Link>
  );
}
