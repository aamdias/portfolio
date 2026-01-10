import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { bookmarks, categories, Bookmark } from '../../data/bookmarks';
import BookmarkCard from '../../components/BookmarkCard/bookmarkcard';
import './bookmarks.scss';

type CategoryFilter = 'all' | Bookmark['category'];

export default function BookmarksPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle URL hash for direct category links
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && categories.some(c => c.id === hash)) {
      setActiveCategory(hash as Bookmark['category']);
    }
  }, []);

  // Update URL hash when category changes
  useEffect(() => {
    if (activeCategory !== 'all') {
      window.history.replaceState(null, '', `#${activeCategory}`);
    } else {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, [activeCategory]);

  const filteredBookmarks = useMemo(() => {
    let result = bookmarks;

    // Filter by category
    if (activeCategory !== 'all') {
      result = result.filter(b => b.category === activeCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(
        b =>
          b.title.toLowerCase().includes(query) ||
          b.description.toLowerCase().includes(query)
      );
    }

    return result;
  }, [activeCategory, searchQuery]);

  // Group bookmarks by category for display
  const groupedBookmarks = useMemo(() => {
    if (activeCategory !== 'all' || searchQuery.trim()) {
      return null; // Show flat list when filtering
    }

    const groups: Record<string, Bookmark[]> = {};
    categories.forEach(cat => {
      groups[cat.id] = bookmarks.filter(b => b.category === cat.id);
    });
    return groups;
  }, [activeCategory, searchQuery]);

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    if (e.target.value.trim()) {
      setActiveCategory('all');
    }
  }, []);

  const handleClearSearch = useCallback(() => {
    setSearchQuery('');
  }, []);

  const handleCategoryClick = useCallback((categoryId: CategoryFilter) => {
    setActiveCategory(categoryId);
    setSearchQuery('');
  }, []);

  const activeCategoryData = categories.find(c => c.id === activeCategory);

  return (
    <div className="bookmarks">
      {/* Breadcrumb */}
      <nav className="bookmarks__breadcrumb" aria-label="Breadcrumb">
        <Link to="/" className="bookmarks__breadcrumb-link">Home</Link>
        <span className="bookmarks__breadcrumb-separator">/</span>
        <span className="bookmarks__breadcrumb-current">Bookmarks</span>
      </nav>

      {/* Header */}
      <header className="bookmarks__header">
        <div className="bookmarks__header-content">
          <h1 className="bookmarks__title">Bookmarks</h1>
          <p className="bookmarks__subtitle">
            Curated resources on product, business, design, and AI
          </p>
        </div>
      </header>

      {/* Search and Filters */}
      <div className="bookmarks__controls">
        <div className={`bookmarks__search ${isSearchFocused ? 'focused' : ''}`}>
          <svg
            className="bookmarks__search-icon"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.75 15.75L12.4875 12.4875"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input
            type="text"
            placeholder="Search bookmarks..."
            value={searchQuery}
            onChange={handleSearch}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
            className="bookmarks__search-input"
          />
          {searchQuery && (
            <button
              className="bookmarks__search-clear"
              onClick={handleClearSearch}
              aria-label="Clear search"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M12 4L4 12M4 4L12 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
        </div>

        <nav className="bookmarks__categories">
          <button
            className={`bookmarks__category ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => handleCategoryClick('all')}
          >
            All
          </button>
          {categories.map(category => (
            <button
              key={category.id}
              className={`bookmarks__category ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => handleCategoryClick(category.id as CategoryFilter)}
            >
              {category.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Active category description */}
      <AnimatePresence mode="wait">
        {activeCategoryData && (
          <motion.div
            key={activeCategory}
            className="bookmarks__category-description"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {activeCategoryData.description}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Results count */}
      {(searchQuery || activeCategory !== 'all') && (
        <div className="bookmarks__results-count">
          {filteredBookmarks.length} {filteredBookmarks.length === 1 ? 'result' : 'results'}
          {searchQuery && ` for "${searchQuery}"`}
        </div>
      )}

      {/* Content */}
      <main className="bookmarks__content">
        <AnimatePresence mode="wait">
          {groupedBookmarks ? (
            // Grouped view (all categories)
            <motion.div
              key="grouped"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {categories.map(category => (
                <section
                  key={category.id}
                  id={category.id}
                  className="bookmarks__section"
                >
                  <div className="bookmarks__section-header">
                    <h2 className="bookmarks__section-title">{category.label}</h2>
                    <span className="bookmarks__section-count">
                      {groupedBookmarks[category.id].length}
                    </span>
                  </div>
                  <p className="bookmarks__section-description">
                    {category.description}
                  </p>
                  <div className="bookmark-grid">
                    {groupedBookmarks[category.id].map((bookmark, index) => (
                      <BookmarkCard
                        key={bookmark.id}
                        bookmark={bookmark}
                        index={index}
                      />
                    ))}
                  </div>
                </section>
              ))}
            </motion.div>
          ) : (
            // Filtered view (single category or search)
            <motion.div
              key="filtered"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bookmark-grid"
            >
              {filteredBookmarks.length > 0 ? (
                filteredBookmarks.map((bookmark, index) => (
                  <BookmarkCard
                    key={bookmark.id}
                    bookmark={bookmark}
                    index={index}
                  />
                ))
              ) : (
                <div className="bookmarks__empty">
                  <p>No bookmarks found</p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setActiveCategory('all');
                    }}
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bookmarks__footer">
        <p>
          Curated by{' '}
          <Link to="/" className="bookmarks__footer-link">
            Alan Dias
          </Link>
        </p>
      </footer>
    </div>
  );
}
