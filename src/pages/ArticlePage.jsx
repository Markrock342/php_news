import { Link, useParams } from 'react-router-dom';
import AdsBanner from '../components/AdsBanner';
import ArticleImage from '../components/ArticleImage';
import RelatedPosts from '../components/RelatedPosts';
import { getArticleById, getArticleContent, getRelatedArticles } from '../data/articles';
import NotFoundPage from './NotFoundPage';
import './ArticlePage.css';

export default function ArticlePage() {
  const { id } = useParams();
  const article = getArticleById(id);

  if (!article) {
    return <NotFoundPage />;
  }

  const content = getArticleContent(article);
  const related = getRelatedArticles(article);
  const midPoint = Math.ceil(content.length / 2);
  const firstHalf = content.slice(0, midPoint);
  const secondHalf = content.slice(midPoint);

  return (
    <main className="main">
      <div className="container">
        <AdsBanner variant="leaderboard" className="ads-banner--top" label="Top Banner 728 × 90" />

        <article className="article-page">
          <header className="article-page__header">
            <div className="article-page__tags">
              <span className="category-badge">{article.category}</span>
              {article.tags.includes('Headline') && (
                <span className="category-badge category-badge--outline">Headline</span>
              )}
            </div>
            <h1 className="article-page__title">{article.title}</h1>
            <div className="meta-line article-page__meta">
              <span className="meta-line__author">โดย {article.author}</span>
              <span className="meta-line__dot">·</span>
              <span>Guest Author</span>
              <span className="meta-line__dot">·</span>
              <time>{article.date}</time>
            </div>
          </header>

          <div className="article-page__featured-image">
            <ArticleImage
              photoId={article.image.id}
              alt={article.image.alt}
              width={1400}
              height={600}
              sizes="100vw"
              loading="eager"
            />
          </div>

          <div className="article-page__body">
            {firstHalf.map((paragraph, i) => (
              <p key={`p1-${i}`} className="article-page__paragraph">
                {paragraph}
              </p>
            ))}

            <AdsBanner variant="inArticle" label="In-Article Banner 600 × 120" />

            {secondHalf.map((paragraph, i) => (
              <p key={`p2-${i}`} className="article-page__paragraph">
                {paragraph}
              </p>
            ))}
          </div>

          <RelatedPosts posts={related} />
        </article>

        <p className="article-page__back">
          <Link to="/">← กลับหน้าแรก</Link>
          {' · '}
          <Link to="/articles">ดูบทความทั้งหมด</Link>
        </p>

        <AdsBanner variant="billboard" className="ads-banner--prefooter" label="Pre-Footer Banner 970 × 250" />
      </div>
    </main>
  );
}
