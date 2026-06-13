import './ShareButtons.css';

export default function ShareButtons() {
  return (
    <div className="share-buttons" aria-label="แชร์บทความ">
      <a href="#facebook" className="share-buttons__btn share-buttons__btn--fb" aria-label="Share on Facebook">
        f
      </a>
      <a href="#x" className="share-buttons__btn share-buttons__btn--x" aria-label="Share on X">
        𝕏
      </a>
      <a href="#line" className="share-buttons__btn share-buttons__btn--line" aria-label="Share on LINE">
        L
      </a>
    </div>
  );
}
