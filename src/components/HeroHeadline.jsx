import { Link } from 'react-router-dom';
import ArticleImage from './ArticleImage';
import './HeroHeadline.css';

export default function HeroHeadline({ article }) {
  if (!article) return null;

  return (
    <section className="hero-headline" aria-labelledby="hero-headline-title">
      <div className="hero-headline__image-wrap">
        <ArticleImage
          photoId={article.image.id}
          alt={article.image.alt}
          className="hero-headline__image"
          loading="eager"
          width={1200}
          height={675}
          sizes="(max-width: 900px) 100vw, 60vw"
        />
        <span className="hero-headline__tag-badge">Headline</span>
      </div>

      <div className="hero-headline__content">
        <span className="category-badge">{article.category}</span>
        <h1 id="hero-headline-title" className="hero-headline__title">
          <Link to={`/article/${article.id}`}>{article.title}</Link>
        </h1>
        <p className="hero-headline__excerpt">{article.excerpt}</p>
        <div className="meta-line hero-headline__meta">
          <span className="meta-line__author">โดย {article.author}</span>
          <span className="meta-line__dot">·</span>
          <time dateTime="2026-06-13">{article.date}</time>
        </div>
      </div>
    </section>
  );
}
