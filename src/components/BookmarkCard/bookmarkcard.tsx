import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Bookmark, getDomain, getLogoUrl, getFaviconUrl } from '../../data/bookmarks';
import './bookmarkcard.scss';

interface BookmarkCardProps {
  bookmark: Bookmark;
  index?: number;
}

// Type icons as inline SVGs for minimal overhead
const TypeIcons: Record<Bookmark['type'], React.ReactNode> = {
  book: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  ),
  podcast: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </svg>
  ),
  article: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  ),
  video: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  ),
  website: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
};

const typeLabels: Record<Bookmark['type'], string> = {
  book: 'Book',
  podcast: 'Podcast',
  article: 'Article',
  video: 'Video',
  website: 'Website',
};

const BookmarkCard: React.FC<BookmarkCardProps> = ({ bookmark, index = 0 }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const domain = getDomain(bookmark.url);
  const logoUrl = getLogoUrl(bookmark.url);
  const faviconUrl = getFaviconUrl(bookmark.url, 64);

  const handleImageError = useCallback(() => {
    setImageError(true);
  }, []);

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  // Get first letter for fallback
  const fallbackLetter = bookmark.title.charAt(0).toUpperCase();

  return (
    <motion.a
      href={bookmark.url}
      target="_blank"
      rel="noopener noreferrer"
      className="bookmark-card"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.03,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      whileHover={{ y: -2 }}
    >
      <div className="bookmark-card__logo">
        {!imageError ? (
          <>
            <img
              src={logoUrl}
              alt=""
              className={`bookmark-card__logo-img ${imageLoaded ? 'loaded' : ''}`}
              onError={handleImageError}
              onLoad={handleImageLoad}
              loading="lazy"
            />
            {!imageLoaded && (
              <img
                src={faviconUrl}
                alt=""
                className="bookmark-card__favicon"
                loading="lazy"
              />
            )}
          </>
        ) : (
          <div className="bookmark-card__fallback">
            {fallbackLetter}
          </div>
        )}
      </div>

      <div className="bookmark-card__content">
        <div className="bookmark-card__type">
          {TypeIcons[bookmark.type]}
          <span>{typeLabels[bookmark.type]}</span>
        </div>
        <h3 className="bookmark-card__title">{bookmark.title}</h3>
        <p className="bookmark-card__description">{bookmark.description}</p>
        <span className="bookmark-card__domain">{domain}</span>
      </div>

      <div className="bookmark-card__arrow">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M6 12L10 8L6 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </motion.a>
  );
};

// Legacy wrapper for MDX compatibility (if needed during transition)
interface LegacyBookmarkCardProps {
  title: string;
  link: string;
  children?: React.ReactNode;
  type?: 'book' | 'podcast' | 'article' | 'video' | 'website';
}

export const LegacyBookmarkCard: React.FC<LegacyBookmarkCardProps> = ({
  title,
  link,
  children,
  type = 'website'
}) => {
  const bookmark: Bookmark = {
    id: title.toLowerCase().replace(/\s+/g, '-'),
    title,
    description: typeof children === 'string' ? children : '',
    url: link,
    category: 'product-management',
    type,
  };

  return <BookmarkCard bookmark={bookmark} />;
};

export default BookmarkCard;
