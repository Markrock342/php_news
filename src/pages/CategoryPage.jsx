import { useParams } from 'react-router-dom';
import MainWithSidebar from '../components/MainWithSidebar';
import HeadlineGrid from '../components/HeadlineGrid';
import { CATEGORY_SLUGS, getArticlesByCategory, getHomeArticles } from '../data/articles';
import NotFoundPage from './NotFoundPage';

const CATEGORY_DESC = {
  Headline: 'ข่าวเด่นและประเด็นสำคัญประจำวัน',
  Movement: 'ความเคลื่อนไหว แคมเปญ และเทรนด์จากแบรนด์ชั้นนำ',
  Insight: 'บทวิเคราะห์เชิงลึกและมุมมองธุรกิจ',
  People: 'บุคคล ผู้บริหาร และเรื่องราว behind the scene',
  Lifestyle: 'ไลฟ์สไตล์คนทำงานและเทรนด์การใช้ชีวิต',
};

export default function CategoryPage() {
  const { slug } = useParams();
  const categoryName = CATEGORY_SLUGS[slug];

  if (!categoryName) {
    return <NotFoundPage />;
  }

  const articles =
    slug === 'headline'
      ? getHomeArticles()
      : getArticlesByCategory(categoryName);

  return (
    <MainWithSidebar>
      <header className="page-header">
        <p className="section-label">{categoryName}</p>
        <h1 className="page-header__title">{categoryName}</h1>
        <p className="page-header__desc">{CATEGORY_DESC[categoryName]}</p>
        {slug !== 'headline' && (
          <p className="page-header__note">
            หมวดนี้แสดงทุกบทความใน {categoryName} — รวมข่าวที่ไม่มี Tag Headline ด้วย
          </p>
        )}
      </header>

      <HeadlineGrid
        articles={articles}
        title={`บทความ ${categoryName}`}
        description={`${articles.length} บทความ`}
        showViewAll={slug === 'headline'}
      />
    </MainWithSidebar>
  );
}
