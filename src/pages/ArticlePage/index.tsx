import { MDXProvider } from '@mdx-js/react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { AiFillMediumSquare } from 'react-icons/ai';

export default function ArticlePage () {
    const { slug } = useParams<{ slug: string }>();

    const ArticleContent = React.lazy(() => import(`../../mdx/${slug}.mdx`));

    return(
        <div className = "article-page">
            <div className="article-top-navigation">
                <Link
                    to="/"
                    className="back-home-button"
                >
                <span className ="back-home-button__icon">< BsPersonCircle /></span>
                </Link>
                <Link
                    to="https://medium.com/@aamdias/prove-seu-valor-como-product-manager-98cb396a6bab"
                    className="read-in-medium-button"
                >
                <span className ="read-in-medium-button__icon"><AiFillMediumSquare /></span>
                </Link>
            </div>
            <React.Suspense fallback={<div>Preparando o artigo...</div>}>
                <MDXProvider>
                    < ArticleContent />
                </MDXProvider>
            </React.Suspense>
        </div>
    );
}