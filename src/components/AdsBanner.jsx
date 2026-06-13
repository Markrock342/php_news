import './AdsBanner.css';

const SIZES = {
  leaderboard: { width: 728, height: 90, label: '728 × 90' },
  rectangle: { width: 300, height: 250, label: '300 × 250' },
  billboard: { width: 970, height: 250, label: '970 × 250' },
  inArticle: { width: 600, height: 120, label: '600 × 120' },
};

export default function AdsBanner({ variant = 'leaderboard', label, className = '' }) {
  const size = SIZES[variant] || SIZES.leaderboard;

  return (
    <aside
      className={`ads-banner ads-banner--${variant} ${className}`}
      aria-label="พื้นที่โฆษณา"
    >
      <div className="ads-banner__inner" style={{ aspectRatio: `${size.width}/${size.height}` }}>
        <span className="ads-banner__tag">Advertisement</span>
        <span className="ads-banner__size">{label || size.label}</span>
        <span className="ads-banner__placeholder">{label || `Banner ${size.label}`}</span>
      </div>
    </aside>
  );
}
