import React from 'react';
import './featuredgrid.scss';

interface FeaturedGridProps {
    children: React.ReactNode[];
    className?: string;
}

export default function FeaturedGrid({ children, className = '' }: FeaturedGridProps) {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

    const flattenedChildren = React.Children.toArray(children).flat();
    const totalSlides = flattenedChildren.length;

    React.useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            if (mobile) {
                setCurrentIndex(0);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    if (!isMobile) {
        return (
            <div className={`featured-grid ${className}`}>
                {children}
            </div>
        );
    }

    return (
        <div className={`featured-carousel ${className}`}>
            <div
                className="featured-carousel__content"
                style={{
                    width: `${totalSlides * 100}%`,
                    transform: `translateX(-${currentIndex * (100 / totalSlides)}%)`
                }}
            >
                {flattenedChildren.map((child, index) => (
                    <div
                        key={index}
                        className="featured-carousel__item"
                        style={{ width: `${100 / totalSlides}%`, flex: `0 0 ${100 / totalSlides}%` }}
                    >
                        {child}
                    </div>
                ))}
            </div>
            <div className="featured-carousel__controls">
                <button
                    onClick={prevSlide}
                    className="featured-carousel__button"
                    disabled={currentIndex === 0}
                    aria-label="Previous"
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <div className="featured-carousel__dots">
                    {flattenedChildren.map((_, index) => (
                        <button
                            key={index}
                            className={`featured-carousel__dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
                <button
                    onClick={nextSlide}
                    className="featured-carousel__button"
                    disabled={currentIndex === totalSlides - 1}
                    aria-label="Next"
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
        </div>
    );
}
