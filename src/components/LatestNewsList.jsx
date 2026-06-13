import { Link } from 'react-router-dom';
import ArticleImage from './ArticleImage';
import './LatestNewsList.css';

function NewsItem({ article, number, index }) {
  return (
    <article
      className="latest-news__cell latest-news__item animate-stagger-item"
      style={{ '--i': index }}
    >
      <span className="latest-news__num">{number}</span>
      <Link to={`/article/${article.id}`} className="latest-news__link interactive-image">
        <div className="article-thumb latest-news__thumb">
          <ArticleImage
            photoId={article.image.id}
            alt={article.image.alt}
            width={192}
            height={144}
            sizes="96px"
          />
        </div>
        <div className="latest-news__body">
          <h3 className="latest-news__title">{article.title}</h3>
          <time className="latest-news__date">{article.date}</time>
        </div>
      </Link>
    </article>
  );
}

export default function LatestNewsList({ articles, title = 'LATEST NEWS' }) {
  const half = Math.ceil(articles.length / 2);
  const rows = Array.from({ length: half }, (_, i) => [
    { article: articles[i], number: i + 1 },
    articles[i + half] ? { article: articles[i + half], number: half + i + 1 } : null,
  ]);

  return (
    <section className="latest-news animate-section" aria-labelledby="latest-news-title">
      <h2 id="latest-news-title" className="latest-news__heading">
        {title}
      </h2>

      <div className="latest-news__grid">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="latest-news__row">
            {row.map((cell, cellIndex) =>
              cell ? (
                <NewsItem
                  key={cell.article.id}
                  article={cell.article}
                  number={cell.number}
                  index={rowIndex * 2 + cellIndex}
                />
              ) : (
                <div key="empty" className="latest-news__cell latest-news__cell--empty" aria-hidden="true" />
              ),
            )}
          </div>
        ))}
      </div>

      <div className="latest-news__action">
        <Link to="/articles" className="btn-primary btn-primary--wide">
          ดูบทความทั้งหมด →
        </Link>
      </div>
    </section>
  );
}
