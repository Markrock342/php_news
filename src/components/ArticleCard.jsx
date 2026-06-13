import { Link } from 'react-router-dom';
import ArticleImage from './ArticleImage';
import './HeadlineGrid.css';

export default function ArticleCard({ article }) {
  return (
    <article className="headline-card">
      <Link to={`/article/${article.id}`} className="headline-card__link">
        <div className="headline-card__image-wrap">
          <ArticleImage
            photoId={article.image.id}
            alt={article.image.alt}
            width={800}
            height={500}
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>
        <div className="headline-card__body">
          <span className="category-badge category-badge--outline headline-card__category">
            {article.category}
          </span>
          <h2 className="headline-card__title">{article.title}</h2>
          <p className="headline-card__excerpt">{article.excerpt}</p>
          <div className="meta-line">
            <span className="meta-line__author">โดย {article.author}</span>
            <span className="meta-line__dot">·</span>
            <time>{article.date}</time>
          </div>
        </div>
      </Link>
    </article>
  );
}
