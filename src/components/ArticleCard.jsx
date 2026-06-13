import { Link } from 'react-router-dom';
import ArticleImage from './ArticleImage';
import AuthorLink from './AuthorLink';
import { CategoryLink, TagLink } from './CategoryLink';
import './HeadlineGrid.css';

export default function ArticleCard({ article }) {
  return (
    <article className="headline-card">
      <Link to={`/article/${article.id}`} className="headline-card__link">
        <div className="article-thumb headline-card__image-wrap">
          <ArticleImage
            photoId={article.image.id}
            alt={article.image.alt}
            width={800}
            height={500}
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>
        <div className="headline-card__body">
          <div className="headline-card__tags">
            <CategoryLink category={article.category} outline className="headline-card__category" />
            {article.tags.includes('Headline') && article.category !== 'Headline' && (
              <TagLink tag="Headline" outline />
            )}
          </div>
          <h2 className="headline-card__title">{article.title}</h2>
          <p className="headline-card__excerpt">{article.excerpt}</p>
          <div className="meta-line">
            <AuthorLink name={article.author} />
            <span className="meta-line__dot">·</span>
            <time>{article.date}</time>
          </div>
        </div>
      </Link>
    </article>
  );
}
