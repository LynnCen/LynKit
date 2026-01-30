/* eslint-disable no-undef */
import React, { useState, useMemo, useEffect } from 'react';
import './gallery.css';

const PAGE_SIZE = 120;

interface IconItem {
  name: string;
  component: React.ComponentType<{ size?: number; className?: string }>;
}

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" />
  </svg>
);

const CheckIcon = ({ size = 12 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const GridIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
);

const ChevronIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const EmptyIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.5">
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" />
    <path d="M8 8l6 6M14 8l-6 6" />
  </svg>
);

export default function IconGallery() {
  const [allIcons, setAllIcons] = useState<IconItem[]>([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [copied, setCopied] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    import('@lynkit/icons').then((Icons) => {
      const icons = Object.entries(Icons)
        .filter(([name, comp]) => {
          if (!name.startsWith('Icon')) return false;
          if (typeof comp === 'function') return true;
          if (comp && typeof comp === 'object' && '$$typeof' in comp) return true;
          return false;
        })
        .map(([name, component]) => ({
          name,
          component: component as React.ComponentType<{ size?: number; className?: string }>,
        }));
      setAllIcons(icons);
      setLoading(false);
    });
  }, []);

  const filteredIcons = useMemo(
    () => allIcons.filter((i) => i.name.toLowerCase().includes(search.toLowerCase())),
    [allIcons, search]
  );

  const displayIcons = filteredIcons.slice(0, page * PAGE_SIZE);
  const hasMore = displayIcons.length < filteredIcons.length;

  const handleCopy = (name: string) => {
    navigator.clipboard.writeText(`import { ${name} } from '@lynkit/icons';`);
    setCopied(name);
    setTimeout(() => setCopied(null), 2000);
  };

  if (loading) {
    return (
      <div className="icon-loading">
        <div className="icon-loading-spinner" />
        <span className="icon-loading-text">加载图标中...</span>
      </div>
    );
  }

  return (
    <div className="icon-gallery">
      {/* Header */}
      <div className="icon-header">
        <div className="icon-header-icon">
          <GridIcon />
        </div>
        <div>
          <h1 className="icon-header-title">图标库</h1>
          <p className="icon-header-desc">
            共 <span className="icon-header-count">{allIcons.length}</span> 个图标，点击复制导入代码
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="icon-search">
        <span className="icon-search-icon">
          <SearchIcon />
        </span>
        <input
          type="text"
          className="icon-search-input"
          placeholder="搜索图标名称..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
        />
        {search && (
          <button className="icon-search-clear" onClick={() => setSearch('')}>
            ✕
          </button>
        )}
        <div className="icon-search-badge">{filteredIcons.length}</div>
      </div>

      {/* Grid */}
      <div className="icon-grid">
        {displayIcons.map(({ name, component: Icon }) => {
          const isCopied = copied === name;
          return (
            <div
              key={name}
              className={`icon-card ${isCopied ? 'copied' : ''}`}
              onClick={() => handleCopy(name)}
              title={`点击复制: ${name}`}
            >
              {isCopied && (
                <div className="icon-card-check">
                  <CheckIcon size={10} />
                </div>
              )}
              <div className="icon-card-icon">
                <Icon size={22} />
              </div>
              <span className="icon-card-name">{name.replace('Icon', '')}</span>
            </div>
          );
        })}
      </div>

      {/* Load More */}
      {hasMore && (
        <button className="icon-load-more" onClick={() => setPage((p) => p + 1)}>
          <ChevronIcon />
          加载更多
          <span className="icon-load-more-count">{filteredIcons.length - displayIcons.length}</span>
        </button>
      )}

      {/* Empty */}
      {!loading && filteredIcons.length === 0 && (
        <div className="icon-empty">
          <div className="icon-empty-icon">
            <EmptyIcon />
          </div>
          <p className="icon-empty-title">未找到图标</p>
          <p className="icon-empty-desc">尝试搜索 "arrow"、"add"、"user" 等关键词</p>
        </div>
      )}

      {/* Toast */}
      {copied && (
        <div className="icon-toast">
          <span className="icon-toast-check">
            <CheckIcon size={10} />
          </span>
          已复制到剪贴板
        </div>
      )}
    </div>
  );
}
