import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Bookmark, getDomain, getLogoUrl, getFaviconUrl } from '../../data/bookmarks';
import './bookmarkcard.scss';

interface BookmarkCardProps {
  bookmark: Bookmark;
  index?: number;
}

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
