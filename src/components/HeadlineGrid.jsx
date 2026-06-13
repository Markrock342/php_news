import { Link } from 'react-router-dom';
import ArticleCard from './ArticleCard';
import './HeadlineGrid.css';

export default function HeadlineGrid({
  articles,
  title = 'ข่าวเด่นประจำวัน',
  description,
  showViewAll = true,
}) {
  return (
    <section className="headline-grid-section" aria-labelledby="headline-grid-title">
      <div className="headline-grid-section__header">
        <p className="section-label">Headline News</p>
        <h2 id="headline-grid-title" className="headline-grid-section__title">
          {title}
        </h2>
        {description && <p className="headline-grid-section__desc">{description}</p>}
      </div>

      {articles.length === 0 ? (
        <p className="headline-grid-section__desc">ยังไม่มีบทความในหมวดนี้</p>
      ) : (
        <div className="headline-grid">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      )}

      {showViewAll && (
        <div className="headline-grid-section__action">
          <Link to="/articles" className="btn-primary">
            ดูบทความทั้งหมด
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      )}
    </section>
  );
}
