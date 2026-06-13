import { Link } from 'react-router-dom';
import ArticleImage from './ArticleImage';
import AuthorLink from './AuthorLink';
import { CategoryLink, TagLink } from './CategoryLink';
import './HeroHeadline.css';

export default function HeroHeadline({ article }) {
  if (!article) return null;

  return (
    <section className="hero-headline" aria-labelledby="hero-headline-title">
      <Link to={`/article/${article.id}`} className="hero-headline__image-wrap article-thumb">
        <ArticleImage
          photoId={article.image.id}
          alt={article.image.alt}
          loading="eager"
          width={800}
          height={500}
          sizes="(max-width: 900px) 100vw, 720px"
        />
      </Link>

      <div className="hero-headline__content">
        <div className="hero-headline__tags">
          <CategoryLink category={article.category} />
          {article.tags.includes('Headline') && <TagLink tag="Headline" outline />}
        </div>
        <h1 id="hero-headline-title" className="hero-headline__title">
          <Link to={`/article/${article.id}`}>{article.title}</Link>
        </h1>
        <p className="hero-headline__excerpt">{article.excerpt}</p>
        <div className="meta-line hero-headline__meta">
          <AuthorLink name={article.author} />
          <span className="meta-line__dot">·</span>
          <time>{article.date}</time>
        </div>
      </div>
    </section>
  );
}
