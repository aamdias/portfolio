import { MDXProvider } from '@mdx-js/react';
import React from 'react';
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
            <React.Suspense fallback={<div>Preparando o artigo...</div>}>
                <MDXProvider>
                    <ArticleContent />
                </MDXProvider>
            </React.Suspense>
        </motion.div>
    );
}