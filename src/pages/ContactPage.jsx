import { Link } from 'react-router-dom';
import MainWithSidebar from '../components/MainWithSidebar';
import './ContactPage.css';

export default function ContactPage() {
  return (
    <MainWithSidebar showTopAd={false}>
      <div className="contact-page">
        <header className="page-header">
          <p className="section-label">Contact</p>
          <h1 className="page-header__title">ติดต่อ Marketimes Asia</h1>
          <p className="page-header__desc">สำหรับข่าวสาร ความร่วมมือ และพื้นที่โฆษณา</p>
        </header>

        <div className="contact-page__grid">
          <section className="contact-page__card">
            <h2>Editorial</h2>
            <p>ส่งข่าว ส press release หรือเสนอเรื่อง</p>
            <a href="mailto:hello@marketimes.asia">hello@marketimes.asia</a>
          </section>

          <section className="contact-page__card">
            <h2>Advertising</h2>
            <p>Banner, In-feed, Sponsored Content</p>
            <a href="mailto:ads@marketimes.asia">ads@marketimes.asia</a>
          </section>

          <section className="contact-page__card">
            <h2>Social</h2>
            <p>ติดตามข่าวและอัปเดต</p>
            <ul>
              <li>
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                  Instagram @marketimes.asia
                </a>
              </li>
              <li>Line OA: @marketimes</li>
            </ul>
          </section>
        </div>

        <p className="contact-page__back">
          <Link to="/">← กลับหน้าแรก</Link>
        </p>
      </div>
    </MainWithSidebar>
  );
}
