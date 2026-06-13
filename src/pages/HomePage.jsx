import MainWithSidebar from '../components/MainWithSidebar';
import HeroHeadline from '../components/HeroHeadline';
import HeadlineGrid from '../components/HeadlineGrid';
import { featuredArticle, getHomeArticles } from '../data/articles';

export default function HomePage() {
  const homeArticles = getHomeArticles();
  const gridArticles = homeArticles.slice(1);

  return (
    <MainWithSidebar showPreFooterAd>
      <HeroHeadline article={featuredArticle} />
      <HeadlineGrid
        articles={gridArticles}
        description={`แสดงข่าวที่ติด Tag "Headline" ล่าสุด ${gridArticles.length} ข่าว`}
      />
    </MainWithSidebar>
  );
}
