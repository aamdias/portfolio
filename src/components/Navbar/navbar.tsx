import './navbar.scss';
import { useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const links = [
    { href: '/', label: 'Sobre' },
    { href: '/conteudos', label: 'Conteúdos' },
    { href: '/produtos', label: 'Produtos' },
    { href: '/bookmarks', label: 'Bookmarks' },
];

function Navbar() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location.pathname]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const isActive = (path: string) => location.pathname === path;

    return (
        <>
            {/* Desktop Navigation */}
            <nav className="navbar">
                <div className="navbar__inner">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            to={link.href}
                            className={`navbar__link ${isActive(link.href) ? 'navbar__link--active' : ''}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
                className="navbar-mobile-trigger"
                onClick={() => setIsOpen(true)}
                aria-label="Open menu"
            >
                <span>Menu</span>
            </button>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            className="navbar-mobile-backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.nav
                            className="navbar-mobile"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="navbar-mobile__header">
                                <span className="navbar-mobile__title">Menu</span>
                                <button
                                    className="navbar-mobile__close"
                                    onClick={() => setIsOpen(false)}
                                    aria-label="Close menu"
                                >
                                    Fechar
                                </button>
                            </div>
                            <div className="navbar-mobile__links">
                                {links.map((link, index) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <Link
                                            to={link.href}
                                            className={`navbar-mobile__link ${isActive(link.href) ? 'navbar-mobile__link--active' : ''}`}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                            <div className="navbar-mobile__footer">
                                <a
                                    href="https://github.com/aamdias"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="navbar-mobile__social"
                                >
                                    GitHub
                                </a>
                                <span className="navbar-mobile__divider">·</span>
                                <a
                                    href="https://www.linkedin.com/in/alan-dias-7b7a0913a"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="navbar-mobile__social"
                                >
                                    LinkedIn
                                </a>
                            </div>
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}

export default Navbar;
