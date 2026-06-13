import AdsBanner from './AdsBanner';
import ArticleImage from './ArticleImage';
import RelatedPosts from './RelatedPosts';
import './ArticlePreview.css';

export default function ArticlePreview({ article, content, relatedPosts }) {
  if (!article) return null;

  const midPoint = Math.ceil(content.length / 2);
  const firstHalf = content.slice(0, midPoint);
  const secondHalf = content.slice(midPoint);

  return (
    <section className="article-preview" aria-labelledby="article-preview-title">
      <div className="article-preview__header-block">
        <p className="section-label">Article Preview</p>
        <h2 id="article-preview-title" className="article-preview__section-title">
          ตัวอย่างหน้าอ่านบทความ
        </h2>
        <p className="article-preview__section-desc">
          Preview โครงสร้างหน้าบทความจริง — รองรับ Guest Author และ Banner ระหว่างเนื้อหา
        </p>
      </div>

      <article className="article-preview__article" id={`article-${article.id}`}>
        <header className="article-preview__header">
          <div className="article-preview__tags">
            <span className="category-badge">{article.category}</span>
            <span className="category-badge category-badge--outline">Headline</span>
          </div>
          <h1 className="article-preview__title">{article.title}</h1>
          <div className="meta-line article-preview__meta">
            <span className="meta-line__author">โดย {article.author}</span>
            <span className="meta-line__dot">·</span>
            <span>Guest Author</span>
            <span className="meta-line__dot">·</span>
            <time dateTime="2026-06-13">{article.date}</time>
          </div>
        </header>

        <div className="article-preview__featured-image">
          <ArticleImage
            photoId={article.image.id}
            alt={article.image.alt}
            width={1400}
            height={600}
            sizes="100vw"
            loading="eager"
          />
        </div>

        <div className="article-preview__body">
          {firstHalf.map((paragraph, i) => (
            <p key={`p1-${i}`} className="article-preview__paragraph">
              {paragraph}
            </p>
          ))}

          <AdsBanner variant="inArticle" label="In-Article Banner 600 × 120" />

          {secondHalf.map((paragraph, i) => (
            <p key={`p2-${i}`} className="article-preview__paragraph">
              {paragraph}
            </p>
          ))}
        </div>

        <RelatedPosts posts={relatedPosts} />
      </article>
    </section>
  );
}
