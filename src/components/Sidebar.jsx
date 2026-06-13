import { Link } from 'react-router-dom';
import { recentPosts, topPosts } from '../data/articles';
import { INSTAGRAM_PHOTOS } from '../utils/images';
import AdsBanner from './AdsBanner';
import ArticleImage from './ArticleImage';
import './Sidebar.css';

function SidebarList({ posts, numbered = false }) {
  return (
    <ol className={`sidebar-list${numbered ? ' sidebar-list--numbered' : ''}`}>
      {posts.map((post, i) => (
        <li key={post.id} className="sidebar-list__item">
          {numbered && <span className="sidebar-list__num">{i + 1}</span>}
          <Link to={`/article/${post.id}`} className="sidebar-list__link">
            <span className="sidebar-list__title">{post.title}</span>
            <span className="sidebar-list__meta">{post.date}</span>
          </Link>
        </li>
      ))}
    </ol>
  );
}

export default function Sidebar() {
  return (
    <aside className="sidebar" aria-label="Sidebar">
      <div className="sidebar__block sidebar__about">
        <h3 className="sidebar__heading">About Marketimes Asia</h3>
        <p className="sidebar__text">
          สื่อออนไลน์ด้านธุรกิจ การตลาด และไลฟ์สไตล์คนทำงาน
          นำเสนอข่าว Headline, Movement, Insight, People และ Lifestyle
        </p>
      </div>

      <div className="sidebar__block">
        <h3 className="sidebar__heading">Recent Posts</h3>
        <SidebarList posts={recentPosts} />
      </div>

      <div className="sidebar__block">
        <h3 className="sidebar__heading">Top Posts</h3>
        <SidebarList posts={topPosts} numbered />
      </div>

      <AdsBanner variant="rectangle" className="ads-banner--sidebar" />

      <div className="sidebar__block sidebar__instagram">
        <h3 className="sidebar__heading">Follow Instagram</h3>
        <div className="sidebar__ig-grid">
          {INSTAGRAM_PHOTOS.map((photo) => (
            <a key={photo.id} href="https://instagram.com" className="sidebar__ig-item" aria-label={photo.alt} target="_blank" rel="noreferrer">
              <ArticleImage photoId={photo.id} alt={photo.alt} width={120} height={120} sizes="100px" />
            </a>
          ))}
        </div>
        <a href="https://instagram.com" className="sidebar__ig-link" target="_blank" rel="noreferrer">
          @marketimes.asia
        </a>
      </div>

      <div className="sidebar__block sidebar__contact">
        <h3 className="sidebar__heading">Contact</h3>
        <ul className="sidebar__contact-list">
          <li>
            <strong>Email:</strong>{' '}
            <a href="mailto:hello@marketimes.asia">hello@marketimes.asia</a>
          </li>
          <li>
            <strong>Line OA:</strong> @marketimes
          </li>
          <li>
            <strong>Advertising:</strong>{' '}
            <a href="mailto:ads@marketimes.asia">ads@marketimes.asia</a>
          </li>
        </ul>
        <Link to="/contact" className="sidebar__contact-btn">
          ไปหน้าติดต่อ →
        </Link>
      </div>
    </aside>
  );
}
