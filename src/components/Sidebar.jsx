import { Link } from 'react-router-dom';
import SidebarSearch from './SidebarSearch';
import AdsBanner from './AdsBanner';
import './Sidebar.css';
import './SidebarSearch.css';

const SOCIAL = [
  { label: 'Facebook', color: '#1877F2', href: 'https://facebook.com' },
  { label: 'X', color: '#000000', href: 'https://x.com' },
  { label: 'LinkedIn', color: '#0A66C2', href: 'https://linkedin.com' },
  { label: 'YouTube', color: '#FF0000', href: 'https://youtube.com' },
  { label: 'Line', color: '#06C755', href: 'https://line.me' },
];

function SidebarAds() {
  return (
    <div className="sidebar__ads">
      <AdsBanner variant="rectangle" className="ads-banner--sidebar" label="300 × 250" />
    </div>
  );
}

export default function Sidebar({ variant = 'default', author, relatedPosts = [] }) {
  const isArticle = variant === 'article';

  return (
    <aside className="sidebar" aria-label="Sidebar">
      <SidebarSearch />
      <SidebarAds />

      {isArticle && author && (
        <div className="sidebar__block sidebar__author-box">
          <h3 className="sidebar__heading">ABOUT THE AUTHOR</h3>
          <div className="sidebar__author-profile">
            <div className="sidebar__author-avatar" aria-hidden="true">
              {author.name.charAt(0)}
            </div>
            <div>
              <Link to={`/author/${author.slug}`} className="sidebar__author-name">
                {author.name}
              </Link>
              <p className="sidebar__author-bio">นักเขียนรายวัน Market Times — ครอบคลุมข่าวธุรกิจและการตลาด</p>
            </div>
          </div>
        </div>
      )}

      {isArticle && relatedPosts.length > 0 && (
        <div className="sidebar__block">
          <h3 className="sidebar__heading">RELATED POSTS</h3>
          <ol className="sidebar-related">
            {relatedPosts.slice(0, 4).map((post) => (
              <li key={post.id}>
                <Link to={`/article/${post.id}`} className="sidebar-related__link">
                  {post.title}
                </Link>
                <time className="sidebar-related__date">{post.date}</time>
              </li>
            ))}
          </ol>
        </div>
      )}

      {!isArticle && (
        <>
          <div className="sidebar__block sidebar__about">
            <h3 className="sidebar__heading">ABOUT US</h3>
            <p className="sidebar__text">
              Market Times สื่อออนไลน์ด้านธุรกิจ การตลาด และไลฟ์สไตล์คนทำงาน
              นำเสนอข่าว Headline, Movement, Insight, People และ Lifestyle
            </p>
            <Link to="/contact" className="sidebar__read-more">
              Read More →
            </Link>
          </div>

          <div className="sidebar__block sidebar__follow">
            <h3 className="sidebar__heading">FOLLOW US</h3>
            <div className="sidebar__social">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="sidebar__social-btn"
                  style={{ background: s.color }}
                  aria-label={s.label}
                  target="_blank"
                  rel="noreferrer"
                >
                  {s.label.charAt(0)}
                </a>
              ))}
            </div>
          </div>
        </>
      )}
    </aside>
  );
}
