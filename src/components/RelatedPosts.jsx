import { Link } from 'react-router-dom';
import ArticleImage from './ArticleImage';
import AuthorLink from './AuthorLink';
import { CategoryLink } from './CategoryLink';
import './RelatedPosts.css';

export default function RelatedPosts({ posts }) {
  if (!posts.length) return null;

  return (
    <section className="related-posts" aria-labelledby="related-posts-title">
      <h2 id="related-posts-title" className="related-posts__title">
        ข่าวที่เกี่ยวข้อง
      </h2>

      <div className="related-posts__grid">
        {posts.map((post) => (
          <article key={post.id} className="related-card">
            <Link to={`/article/${post.id}`} className="related-card__link">
              <div className="article-thumb related-card__image-wrap">
                <ArticleImage
                  photoId={post.image.id}
                  alt={post.image.alt}
                  width={400}
                  height={250}
                  sizes="(max-width: 480px) 100vw, 250px"
                />
              </div>
              <div className="related-card__body">
                <CategoryLink category={post.category} outline className="related-card__cat" />
                <h3 className="related-card__title">{post.title}</h3>
                <div className="meta-line">
                  <AuthorLink name={post.author} />
                  <span className="meta-line__dot">·</span>
                  <time>{post.date}</time>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
