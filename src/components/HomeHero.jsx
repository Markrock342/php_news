import { Link } from 'react-router-dom';
import ArticleImage from './ArticleImage';
import AuthorLink from './AuthorLink';
import { CategoryLink } from './CategoryLink';
import './HomeHero.css';

function SecondaryCard({ article, index }) {
  return (
    <article
      className="home-hero__secondary interactive-lift animate-hero-side"
      style={{ '--i': index, animationDelay: `${120 + index * 80}ms` }}
    >
      <Link to={`/article/${article.id}`} className="home-hero__secondary-link">
        <div className="article-thumb home-hero__secondary-image interactive-image">
          <ArticleImage
            photoId={article.image.id}
            alt={article.image.alt}
            width={400}
            height={250}
            sizes="200px"
          />
        </div>
        <div className="home-hero__secondary-body">
          <CategoryLink category={article.category} />
          <h3 className="home-hero__secondary-title">{article.title}</h3>
          <time className="home-hero__secondary-date">{article.date}</time>
        </div>
      </Link>
    </article>
  );
}

export default function HomeHero({ featured, secondary = [] }) {
  if (!featured) return null;

  return (
    <section className="home-hero animate-hero" aria-label="ข่าวเด่น">
      <article className="home-hero__main interactive-lift">
        <Link to={`/article/${featured.id}`} className="home-hero__main-image-wrap interactive-image">
          <div className="article-thumb home-hero__main-image">
            <ArticleImage
              photoId={featured.image.id}
              alt={featured.image.alt}
              width={900}
              height={560}
              sizes="(max-width: 900px) 100vw, 65vw"
              loading="eager"
            />
          </div>
          <div className="home-hero__main-overlay">
            <CategoryLink category={featured.category} />
            <h2 className="home-hero__main-title">{featured.title}</h2>
            <div className="home-hero__main-meta">
              <time>{featured.date}</time>
              <span>·</span>
              <AuthorLink name={featured.author} prefix="" />
            </div>
          </div>
        </Link>
      </article>

      <div className="home-hero__side">
        {secondary.map((article, index) => (
          <SecondaryCard key={article.id} article={article} index={index} />
        ))}
      </div>
    </section>
  );
}
