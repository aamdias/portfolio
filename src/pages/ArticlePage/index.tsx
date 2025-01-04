import { MDXProvider } from '@mdx-js/react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React from 'react';
import { AiFillMediumSquare } from 'react-icons/ai';
import { BiArrowBack } from 'react-icons/bi';
import { FaCircleArrowRight } from "react-icons/fa6";
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

export default function ArticlePage () {
    const { slug } = useParams<{ slug: string }>();
    const article = articlesData.find(article => article.slug === slug);
    const external_link = article?.externalLink;
    const ArticleContent = React.lazy(() => import(`../../mdx/${slug}.mdx`));

    return(
        <motion.div 
            className="article-page"
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
        >
            <div className="article-top-navigation">
                <Link
                    to="/conteudos"
                    className="back-home-button"
                >
                    <span className="back-home-button__icon">
                        <BiArrowBack /> Voltar
                    </span>
                </Link>
                <a
                    href={external_link}
                    target="_blank"
                    className="read-in-medium-button"
                    rel="noopener noreferrer"
                >
                    <span className="read-in-medium-button__icon">
                        <AiFillMediumSquare />
                    </span>
                </a>
            </div>
            <React.Suspense fallback={<div>Preparando o artigo...</div>}>
                <MDXProvider>
                    <ArticleContent />
                </MDXProvider>
            </React.Suspense>
            <Link
                to="/conteudos"
                className="see-all-content-button"
            >
                Ver mais conteúdo
                <FaCircleArrowRight />
            </Link>
        </motion.div>
    );
}