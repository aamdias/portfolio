import './navbar.scss';
import { useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { HiOutlineMenu, HiOutlineX, HiChevronDown } from 'react-icons/hi';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

const links = [
    { href: '/', label: 'Sobre' },
    { href: '/conteudos', label: 'Conteúdos' },
    { href: '/produtos', label: 'Produtos' },
    { href: '/bookmarks', label: 'Bookmarks' },
];

function Navbar() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [isMoreOpen, setIsMoreOpen] = useState(false);

    useEffect(() => {
        setIsOpen(false);
        setIsMoreOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location.pathname]);

    const isActive = (path: string) => location.pathname === path;

    return (
        <>
            {/* Desktop Menu */}
            <nav className="navbar">
                <div className="navbar__container">
                    <div className="navbar__desktop-menu">
                        <div className="navbar__links">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    to={link.href}
                                    className={`navbar__link ${isActive(link.href) ? 'navbar__link--active' : ''}`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <button 
                                className="navbar__more-trigger"
                                onClick={() => setIsMoreOpen(!isMoreOpen)}
                            >
                                Mais
                                <HiChevronDown />
                            </button>
                        </div>
                    </div>
                </div>
                <AnimatePresence>
                    {isMoreOpen && (
                        <motion.div 
                            className="navbar__more-menu"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                        >
                            <a 
                                href="https://github.com/aamdias" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="navbar__social-link"
                            >
                                <FiGithub />
                                GitHub
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/alan-dias-7b7a0913a" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="navbar__social-link"
                            >
                                <FiLinkedin />
                                LinkedIn
                            </a>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Mobile Menu */}
            <div className="navbar__mobile-menu">
                <button 
                    className="navbar__mobile-trigger"
                    onClick={() => setIsOpen(true)}
                >
                    Menu
                    <HiOutlineMenu />
                </button>

                <AnimatePresence>
                    {isOpen && (
                        <>
                            <motion.div 
                                className="navbar__mobile-content"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="navbar__mobile-links">
                                    {links.map((link) => (
                                        <Link
                                            key={link.href}
                                            to={link.href}
                                            className={`navbar__mobile-link ${isActive(link.href) ? 'navbar__mobile-link--active' : ''}`}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>

                                <div className="navbar__mobile-social">
                                    <a 
                                        href="https://github.com/aamdias" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="navbar__social-link"
                                    >
                                        <FiGithub />
                                        GitHub
                                    </a>
                                    <a 
                                        href="https://www.linkedin.com/in/alan-dias-7b7a0913a" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="navbar__social-link"
                                    >
                                        <FiLinkedin />
                                        LinkedIn
                                    </a>
                                </div>
                            </motion.div>
                            <button 
                                className="navbar__mobile-close"
                                onClick={() => setIsOpen(false)}
                            >
                                Fechar
                                <HiOutlineX />
                            </button>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}

export default Navbar;
