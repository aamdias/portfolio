import React from 'react';
import { FiBook, FiHeadphones, FiFileText, FiVideo, FiGlobe } from 'react-icons/fi';
import './bookmarkcard.scss';

type BookmarkCardProps = {
    title: string;
    link: string;
    children?: React.ReactNode;
    type?: 'book' | 'podcast' | 'article' | 'video' | 'website';
};

const getIcon = (type?: string) => {
    switch (type) {
        case 'book':
            return <FiBook className="bookmark-card__icon" />;
        case 'podcast':
            return <FiHeadphones className="bookmark-card__icon" />;
        case 'article':
            return <FiFileText className="bookmark-card__icon" />;
        case 'video':
            return <FiVideo className="bookmark-card__icon" />;
        case 'website':
            return <FiGlobe className="bookmark-card__icon" />;
        default:
            return <FiGlobe className="bookmark-card__icon" />;
    }
};

const BookmarkCard: React.FC<BookmarkCardProps> = ({ title, link, children, type }) => {
    return (
        <a href={link} className="bookmark-card" target="_blank" rel="noopener noreferrer">
            <div className="bookmark-card__content">
                <div className="bookmark-card__header">
                    {getIcon(type)}
                    <h4 className="bookmark-card__title">{title}</h4>
                </div>
                {children && <p className="bookmark-card__description">{children}</p>}
            </div>
        </a>
    );
};

export default BookmarkCard; 