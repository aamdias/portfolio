import './navbar.scss';
import { useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

function Navbar() {
    const tabs = [
        { id: 'sobre', label: 'Sobre', path: '/' },
        { id: 'conteudos', label: 'Conteúdos', path: '/conteudos' },
        { id: 'produtos', label: 'Produtos', path: '/produtos' },
    ];

    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location.pathname]);

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
            <div className="navbar__container">
                <Link to="/" className="navbar__logo">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        Alan Dias
                    </motion.span>
                </Link>

                <div className="navbar__desktop-menu">
                    <div className="navbar__links">
                        {tabs.map((tab) => (
                            <Link
                                key={tab.id}
                                to={tab.path}
                                className={`navbar__link ${isActive(tab.path) ? 'navbar__link--active' : ''}`}
                            >
                                {tab.label}
                                {isActive(tab.path) && (
                                    <motion.div
                                        className="navbar__link-indicator"
                                        layoutId="indicator"
                                        transition={{
                                            type: 'spring',
                                            stiffness: 300,
                                            damping: 30
                                        }}
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    <div className="navbar__social">
                        <a href="https://github.com/aamdias" target="_blank" rel="noopener noreferrer" className="navbar__social-link">
                            <FiGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/alan-dias-7b7a0913a" target="_blank" rel="noopener noreferrer" className="navbar__social-link">
                            <FiLinkedin />
                        </a>
                    </div>
                </div>

                <button 
                    className="navbar__mobile-trigger" 
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <motion.div
                        initial={false}
                        animate={{ rotate: isOpen ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
                    </motion.div>
                </button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div 
                            className="navbar__mobile-menu"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="navbar__mobile-links">
                                {tabs.map((tab) => (
                                    <Link
                                        key={tab.id}
                                        to={tab.path}
                                        className={`navbar__mobile-link ${isActive(tab.path) ? 'navbar__mobile-link--active' : ''}`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {tab.label}
                                    </Link>
                                ))}
                            </div>

                            <div className="navbar__mobile-social">
                                <a href="https://github.com/aamdias" target="_blank" rel="noopener noreferrer" className="navbar__social-link">
                                    <FiGithub />
                                </a>
                                <a href="https://www.linkedin.com/in/alan-dias-7b7a0913a" target="_blank" rel="noopener noreferrer" className="navbar__social-link">
                                    <FiLinkedin />
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}

export default Navbar;
