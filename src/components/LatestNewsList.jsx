import { Link } from 'react-router-dom';
import ArticleImage from './ArticleImage';
import './LatestNewsList.css';

function NewsItem({ article, number }) {
  return (
    <article className="latest-news__item">
      <span className="latest-news__num">{number}</span>
      <Link to={`/article/${article.id}`} className="latest-news__link">
        <div className="article-thumb latest-news__thumb">
          <ArticleImage
            photoId={article.image.id}
            alt={article.image.alt}
            width={120}
            height={80}
            sizes="80px"
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
  const col1 = articles.slice(0, half);
  const col2 = articles.slice(half);

  return (
    <section className="latest-news" aria-labelledby="latest-news-title">
      <h2 id="latest-news-title" className="latest-news__heading">
        {title}
      </h2>

      <div className="latest-news__grid">
        <div className="latest-news__col">
          {col1.map((article, i) => (
            <NewsItem key={article.id} article={article} number={i + 1} />
          ))}
        </div>
        <div className="latest-news__col">
          {col2.map((article, i) => (
            <NewsItem key={article.id} article={article} number={half + i + 1} />
          ))}
        </div>
      </div>

      <div className="latest-news__action">
        <Link to="/articles" className="btn-primary btn-primary--wide">
          ดูบทความทั้งหมด →
        </Link>
      </div>
    </section>
  );
}
