import './SidebarSearch.css';

export default function SidebarSearch() {
  return (
    <div className="sidebar-search">
      <h3 className="sidebar-search__heading">ค้นหา</h3>
      <form className="sidebar-search__form" role="search" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="sidebar-search" className="sr-only">
          ค้นหาข่าวและบทความ
        </label>
        <input
          id="sidebar-search"
          type="search"
          placeholder="ค้นหาข่าว..."
          className="sidebar-search__input"
        />
        <button type="submit" className="sidebar-search__btn" aria-label="ค้นหา">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </button>
      </form>
    </div>
  );
}
