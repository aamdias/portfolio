import React from 'react';
import './bookmarkcard.scss';

type BookmarkCardProps = {
    title: string;
    link: string;
    children?: React.ReactNode;
};

const BookmarkCard: React.FC<BookmarkCardProps> = ({ title, link, children }) => {
    return (
        <a href={link} className="bookmark-card" target="_blank" rel="noopener noreferrer">
            <div className="bookmark-card__content">
                <h4 className="bookmark-card__title">{title}</h4>
                {children && <p className="bookmark-card__description">{children}</p>}
            </div>
        </a>
    );
};

export default BookmarkCard; 