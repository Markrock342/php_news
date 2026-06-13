import MainWithSidebar from '../components/MainWithSidebar';
import HomeHero from '../components/HomeHero';
import LatestNewsList from '../components/LatestNewsList';
import { getHomeArticles } from '../data/articles';

export default function HomePage() {
  const homeArticles = getHomeArticles();
  const featured = homeArticles[0];
  const secondary = homeArticles.slice(1, 3);
  const latest = homeArticles.slice(3, 13);

  return (
    <MainWithSidebar>
      <HomeHero featured={featured} secondary={secondary} />
      <LatestNewsList articles={latest} />
    </MainWithSidebar>
  );
}
