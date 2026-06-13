import { Link, useParams } from 'react-router-dom';
import MainWithSidebar from '../components/MainWithSidebar';
import ArticleImage from '../components/ArticleImage';
import AuthorLink from '../components/AuthorLink';
import RelatedPosts from '../components/RelatedPosts';
import { CategoryLink, TagLink } from '../components/CategoryLink';
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

  return (
    <MainWithSidebar sidebarVariant="article">
      <article className="article-page">
        <header className="article-page__header">
          <div className="article-page__tags">
            <CategoryLink category={article.category} />
            {article.tags.includes('Headline') && <TagLink tag="Headline" outline />}
          </div>
          <h1 className="article-page__title">{article.title}</h1>
          <div className="meta-line article-page__meta">
            <AuthorLink name={article.author} />
            <span className="meta-line__dot">·</span>
            <time>{article.date}</time>
          </div>
        </header>

        <div className="article-page__featured-image article-thumb">
          <ArticleImage
            photoId={article.image.id}
            alt={article.image.alt}
            width={800}
            height={500}
            sizes="(max-width: 900px) 100vw, 720px"
            loading="eager"
          />
        </div>

        <div className="article-page__body">
          {content.map((paragraph, i) => (
            <p key={i} className="article-page__paragraph">
              {paragraph}
            </p>
          ))}
        </div>

        <RelatedPosts posts={related} />
      </article>

      <p className="article-page__back">
        <Link to="/">← กลับหน้าแรก</Link>
      </p>
    </MainWithSidebar>
  );
}
