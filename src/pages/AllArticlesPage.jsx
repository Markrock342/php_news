import MainWithSidebar from '../components/MainWithSidebar';
import HeadlineGrid from '../components/HeadlineGrid';
import { allArticles } from '../data/articles';

export default function AllArticlesPage() {
  return (
    <MainWithSidebar>
      <header className="page-header">
        <p className="section-label">Archive</p>
        <h1 className="page-header__title">บทความทั้งหมด</h1>
        <p className="page-header__desc">
          รวมทุกหมวด Headline, Movement, Insight, People, Lifestyle — เรียงจากวันที่ล่าสุด
          ไม่จำกัดเฉพาะ Tag Headline
        </p>
      </header>

      <HeadlineGrid
        articles={allArticles}
        title="ทุกบทความ"
        description={`${allArticles.length} บทความ`}
        showViewAll={false}
      />
    </MainWithSidebar>
  );
}
