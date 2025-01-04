import { MDXProvider } from '@mdx-js/react';
import { Link } from 'react-router-dom';
import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import './bookmarks.scss';

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

export default function BookmarksPage () {
    const ArticleContent = React.lazy(() => import(`../../mdx/bookmarks.mdx`));

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://tally.so/widgets/embed.js";
        script.async = true;
    
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        };
    }, []);

    return(
        <motion.div 
            className="bookmarks-page"
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
        >
            <div className="bookmarks-top-navigation">
                <Link
                    to="/conteudos"
                    className="back-home-button"
                >
                    <span className="back-home-button__icon">
                        <BiArrowBack /> Voltar
                    </span>
                </Link>
            </div>
            <React.Suspense fallback={<div>Preparando o artigo...</div>}>
                <MDXProvider>
                    <ArticleContent />
                </MDXProvider>
            </React.Suspense>
        </motion.div>
    );
}