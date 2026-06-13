import { useParams } from 'react-router-dom';
import MainWithSidebar from '../components/MainWithSidebar';
import HeadlineGrid from '../components/HeadlineGrid';
import { getArticlesByAuthorSlug } from '../data/articles';
import { SLUG_TO_AUTHOR } from '../utils/routes';
import NotFoundPage from './NotFoundPage';

export default function AuthorPage() {
  const { slug } = useParams();
  const authorName = SLUG_TO_AUTHOR[slug];

  if (!authorName) {
    return <NotFoundPage />;
  }

  const articles = getArticlesByAuthorSlug(slug);

  return (
    <MainWithSidebar>
      <header className="page-header">
        <p className="section-label">Author</p>
        <h1 className="page-header__title">{authorName}</h1>
        <p className="page-header__desc">
          บทความทั้งหมดโดย {authorName} — ทุกหมวด เรียงจากล่าสุด ({articles.length} บทความ)
        </p>
      </header>

      <HeadlineGrid
        articles={articles}
        title={`บทความโดย ${authorName}`}
        showViewAll={false}
      />
    </MainWithSidebar>
  );
}
