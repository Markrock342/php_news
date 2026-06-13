import { Link } from 'react-router-dom';
import { getAuthorSlug } from '../utils/routes';

export default function AuthorLink({ name, prefix = 'โดย ' }) {
  const slug = getAuthorSlug(name);

  if (!slug) {
    return <span className="author-link">{prefix}{name}</span>;
  }

  return (
    <Link to={`/author/${slug}`} className="author-link">
      {prefix}{name}
    </Link>
  );
}
