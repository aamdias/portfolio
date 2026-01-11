import { MDXProvider } from '@mdx-js/react';
import { useParams, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import articlesData from '../../data/articles.json';
import './article-page.scss';

const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

export default function ArticlePage() {
    const { slug } = useParams<{ slug: string }>();
    const article = articlesData.find(article => article.slug === slug);
    const external_link = article?.externalLink;
    const ArticleContent = React.lazy(() => import(`../../mdx/${slug}.mdx`));

    // Dark mode state with localStorage persistence
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const saved = localStorage.getItem('article-dark-mode');
        return saved ? JSON.parse(saved) : false;
    });

    useEffect(() => {
        localStorage.setItem('article-dark-mode', JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    // Find next article for recommendation
    const currentIndex = articlesData.findIndex(a => a.slug === slug);
    const nextArticle = articlesData[(currentIndex + 1) % articlesData.length];

    return (
        <div className={`article-page-wrapper ${isDarkMode ? 'article-page-wrapper--dark' : ''}`}>
            {/* Minimal top bar */}
            <nav className="article-page__topbar">
                <Link to="/" className="article-page__home-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 18l-6-6 6-6"/>
                    </svg>
                    <span>Início</span>
                </Link>

                <button
                    className="article-page__theme-toggle"
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    aria-label={isDarkMode ? 'Ativar modo claro' : 'Ativar modo escuro'}
                >
                    {isDarkMode ? (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="5"/>
                            <line x1="12" y1="1" x2="12" y2="3"/>
                            <line x1="12" y1="21" x2="12" y2="23"/>
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                            <line x1="1" y1="12" x2="3" y2="12"/>
                            <line x1="21" y1="12" x2="23" y2="12"/>
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                        </svg>
                    ) : (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                        </svg>
                    )}
                </button>
            </nav>

            <motion.article
                className="article-page"
                initial="hidden"
                animate="visible"
                variants={fadeInVariants}
            >
                {/* Article header */}
                <header className="article-page__header">
                    <time className="article-page__date">{article?.publishedDate}</time>
                    <h1 className="article-page__title">{article?.title}</h1>
                    {article?.description && (
                        <p className="article-page__subtitle">{article.description}</p>
                    )}
                </header>

                {/* Article content */}
                <div className="article-page__content">
                    <React.Suspense fallback={
                        <div className="article-page__loading">
                            <span>Carregando artigo...</span>
                        </div>
                    }>
                        <MDXProvider>
                            <ArticleContent />
                        </MDXProvider>
                    </React.Suspense>
                </div>

                {/* Article footer */}
                <footer className="article-page__footer">
                    {external_link && (
                        <a
                            href={external_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="article-page__external-link"
                        >
                            Ler no Medium
                        </a>
                    )}

                    <div className="article-page__divider" />

                    {/* Next article recommendation */}
                    {nextArticle && nextArticle.slug !== slug && (
                        <div className="article-page__next">
                            <span className="article-page__next-label">Próximo artigo</span>
                            <Link
                                to={`/artigos/${nextArticle.slug}`}
                                className="article-page__next-link"
                            >
                                <span className="article-page__next-title">{nextArticle.title}</span>
                                <span className="article-page__next-arrow">→</span>
                            </Link>
                        </div>
                    )}

                    <Link to="/conteudos" className="article-page__back-link">
                        ← Ver todos os conteúdos
                    </Link>
                </footer>
            </motion.article>
        </div>
    );
}
