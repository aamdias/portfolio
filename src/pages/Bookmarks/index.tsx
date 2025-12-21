import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
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

const sections = [
    { id: 'product-management', label: 'Product Management' },
    { id: 'business', label: 'Business' },
    { id: 'design-ux', label: 'Design & UX' },
    { id: 'ai', label: 'AI' }
];

export default function BookmarksPage () {
    const ArticleContent = React.lazy(() => import(`../../mdx/bookmarks.mdx`));
    const [activeSection, setActiveSection] = useState('');
    const [copiedId, setCopiedId] = useState('');

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://tally.so/widgets/embed.js";
        script.async = true;

        document.body.appendChild(script);

        return () => {
          document.body.removeChild(script);
        };
    }, []);

    useEffect(() => {
        // Add smooth scrolling behavior
        document.documentElement.style.scrollBehavior = 'smooth';

        // Scroll to top if no hash in URL
        if (!window.location.hash) {
            window.scrollTo(0, 0);
        }

        return () => {
            document.documentElement.style.scrollBehavior = 'auto';
        };
    }, []);

    useEffect(() => {
        // Track active section for navigation highlight
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-20% 0px -70% 0px' }
        );

        sections.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        // Add copy link functionality to section headings
        const addCopyButtons = () => {
            const headings = document.querySelectorAll<HTMLElement>('h2[id]');

            headings.forEach((heading) => {
                // Skip if button already exists
                if (heading.querySelector('.section-link-copy')) return;

                const id = heading.getAttribute('id');
                const button = document.createElement('button');
                button.className = 'section-link-copy';
                button.setAttribute('aria-label', 'Copy link to section');
                button.innerHTML = '<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>';

                button.addEventListener('click', async (e) => {
                    e.preventDefault();
                    const url = `${window.location.origin}${window.location.pathname}#${id}`;

                    try {
                        await navigator.clipboard.writeText(url);
                        setCopiedId(id || '');
                        setTimeout(() => setCopiedId(''), 2000);
                    } catch (err) {
                        console.error('Failed to copy link:', err);
                    }
                });

                heading.appendChild(button);
            });
        };

        // Wait for MDX content to load
        const timer = setTimeout(addCopyButtons, 500);
        return () => clearTimeout(timer);
    }, []);

    return(
        <>
            {copiedId && (
                <div className="copy-toast">
                    Link copiado!
                </div>
            )}
            <nav className="bookmarks-side-nav">
                <div className="bookmarks-side-nav__content">
                    {sections.map(({ id, label }) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            className={`bookmarks-side-nav__link ${activeSection === id ? 'active' : ''}`}
                            title={label}
                        >
                            <span className="bookmarks-side-nav__label">{label}</span>
                        </a>
                    ))}
                </div>
            </nav>
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
        </>
    );
}