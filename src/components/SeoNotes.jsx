import { seoFeatures } from '../data/articles';
import './SeoNotes.css';

export default function SeoNotes() {
  return (
    <section className="seo-notes" aria-labelledby="seo-notes-title">
      <div className="container">
        <p className="section-label">Technical Notes</p>
        <h2 id="seo-notes-title" className="seo-notes__title">
          SEO & Performance — WordPress Ready
        </h2>
        <p className="seo-notes__desc">
          ระบบรองรับการ optimize สำหรับ production บน WordPress
        </p>

        <ul className="seo-notes__grid">
          {seoFeatures.map((feature) => (
            <li key={feature.name} className="seo-notes__item">
              <span className="seo-notes__icon" aria-hidden="true">✓</span>
              <div>
                <strong className="seo-notes__name">{feature.name}</strong>
                <p className="seo-notes__text">{feature.desc}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="seo-notes__logic">
          <h3 className="seo-notes__logic-title">Logic สำคัญของหน้า Home</h3>
          <ul className="seo-notes__logic-list">
            <li>หน้า Home แสดงเฉพาะข่าวที่ติด Tag &quot;Headline&quot;</li>
            <li>ข่าว Movement / Insight / People / Lifestyle ไม่ขึ้น Home หากไม่มี Tag Headline</li>
            <li>เข้าดูหมวดอื่นได้ผ่านเมนู Navigation</li>
            <li>ปุ่ม &quot;ดูบทความทั้งหมด&quot; แสดงทุกข่าวในเว็บ เรียงวันที่ล่าสุด</li>
            <li>รองรับ Guest Author — แสดงชื่อผู้เขียนจริงหน้าบ้าน</li>
            <li>เผื่อพื้นที่ Banner Ads 5 ตำแหน่ง (Top, Sidebar, In-feed, In-Article, Pre-footer)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
