import { MDXProvider } from '@mdx-js/react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React from 'react';
import { AiFillMediumSquare } from 'react-icons/ai';
import articlesData from '../../data/articles.json';
import { BiArrowBack } from 'react-icons/bi';
import { FaCircleArrowRight } from "react-icons/fa6";

export default function ArticlePage () {
    const { slug } = useParams<{ slug: string }>();

    console.log(articlesData);

    const article = articlesData.find(article => article.slug === slug);

    const external_link = article?.externalLink;
    
    const ArticleContent = React.lazy(() => import(`../../mdx/${slug}.mdx`));

    return(
        <div className = "article-page">
            <div className="article-top-navigation">
            
                <Link
                    to="/"
                    className="back-home-button"
                >
                <span className ="back-home-button__icon">< BiArrowBack /> Voltar </span>
                </Link>
                <a
                    href={external_link}
                    target="_blank"
                    className="read-in-medium-button"
                >
                <span className ="read-in-medium-button__icon"><AiFillMediumSquare /></span>
                </a>
            </div>
            <React.Suspense fallback={<div>Preparando o artigo...</div>}>
                <MDXProvider>
                    < ArticleContent />
                </MDXProvider>
            </React.Suspense>
            <Link
                to="/conteudos"
                className="see-all-content-button"
            >
                Ver mais conteúdo
                <FaCircleArrowRight />
            </Link>
        </div>
    );
}