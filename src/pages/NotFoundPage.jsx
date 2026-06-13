import { Link } from 'react-router-dom';
import './NotFoundPage.css';

export default function NotFoundPage() {
  return (
    <main className="main">
      <div className="container not-found">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__desc">ไม่พบหน้าที่คุณต้องการ</p>
        <Link to="/" className="btn-primary">
          กลับหน้าแรก
        </Link>
      </div>
    </main>
  );
}
