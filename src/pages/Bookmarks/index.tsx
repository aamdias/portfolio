import { MDXProvider } from '@mdx-js/react';
import { Link } from 'react-router-dom';
import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { useEffect } from 'react';


export default function BookmarksPage () {
    
    const ArticleContent = React.lazy(() => import(`../../mdx/bookmarks.mdx`));

    useEffect(() => {
        // Create script element
        const script = document.createElement('script');
        script.src = "https://tally.so/widgets/embed.js";
        script.async = true;
    
        // Append script to the body
        document.body.appendChild(script);
    
        // Clean up the script when the component unmounts
        return () => {
          document.body.removeChild(script);
        };
      }, []);

    return(
        <div className = "bookmarks-page">
            <div className="bookmarks-top-navigation">
                <Link
                    to="/conteudos"
                    className="back-home-button"
                >
                <span className ="back-home-button__icon">< BiArrowBack /> Voltar </span>
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