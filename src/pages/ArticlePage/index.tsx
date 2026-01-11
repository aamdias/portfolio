import { MDXProvider } from '@mdx-js/react';
import { useParams, Link } from 'react-router-dom';
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar/navbar.tsx';
import Footer from '../../components/Footer/footer.tsx';
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

    // Find next article for recommendation
    const currentIndex = articlesData.findIndex(a => a.slug === slug);
    const nextArticle = articlesData[(currentIndex + 1) % articlesData.length];

    return (
        <div className="article-page-wrapper">
            <Navbar />
            <motion.article
                className="article-page"
                initial="hidden"
                animate="visible"
                variants={fadeInVariants}
            >
                {/* Breadcrumb navigation */}
                <nav className="article-page__breadcrumb">
                    <Link to="/" className="article-page__breadcrumb-link">Início</Link>
                    <span className="article-page__breadcrumb-separator">/</span>
                    <Link to="/conteudos" className="article-page__breadcrumb-link">Conteúdos</Link>
                    <span className="article-page__breadcrumb-separator">/</span>
                    <span className="article-page__breadcrumb-current">{article?.title}</span>
                </nav>

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
            <Footer />
        </div>
    );
}
