import { useParams } from 'react-router-dom';
import MainWithSidebar from '../components/MainWithSidebar';
import ArticleImage from '../components/ArticleImage';
import AuthorLink from '../components/AuthorLink';
import Breadcrumbs, { categoryCrumb } from '../components/Breadcrumbs';
import ShareButtons from '../components/ShareButtons';
import { CategoryLink } from '../components/CategoryLink';
import { getArticleById, getArticleContent, getRelatedArticles } from '../data/articles';
import { getAuthorSlug } from '../utils/routes';
import NotFoundPage from './NotFoundPage';
import './ArticlePage.css';

function estimateReadTime(content) {
  const words = content.join(' ').length / 4;
  return Math.max(3, Math.round(words / 200));
}

export default function ArticlePage() {
  const { id } = useParams();
  const article = getArticleById(id);

  if (!article) {
    return <NotFoundPage />;
  }

  const content = getArticleContent(article);
  const related = getRelatedArticles(article);
  const readMin = estimateReadTime(content);
  const authorSlug = getAuthorSlug(article.author);

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    categoryCrumb(article.category),
    { label: article.title },
  ];

  return (
    <MainWithSidebar
      sidebarVariant="article"
      sidebarProps={{
        author: { name: article.author, slug: authorSlug },
        relatedPosts: related,
      }}
    >
      <article className="article-page">
        <Breadcrumbs items={breadcrumbs} />

        <header className="article-page__header">
          <h1 className="article-page__title">{article.title}</h1>

          <div className="article-page__meta-row">
            <div className="article-page__meta">
              <div className="article-page__author-chip">
                <span className="article-page__avatar" aria-hidden="true">
                  {article.author.charAt(0)}
                </span>
                <AuthorLink name={article.author} prefix="" />
              </div>
              <span className="meta-line__dot">·</span>
              <time>{article.date}</time>
              <span className="meta-line__dot">·</span>
              <CategoryLink category={article.category} outline />
              <span className="meta-line__dot">·</span>
              <span>{readMin} min read</span>
            </div>
            <ShareButtons />
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
      </article>
    </MainWithSidebar>
  );
}
