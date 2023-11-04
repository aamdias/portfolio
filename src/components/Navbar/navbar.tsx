import './navbar.scss';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BsPersonCircle } from 'react-icons/bs';
import { MdOutlineWork } from 'react-icons/md';
import { AiOutlineCalendar } from 'react-icons/ai';
import { useState, useEffect } from 'react';

import { AiFillRead } from 'react-icons/ai';
import { FiPackage } from 'react-icons/fi';


function Navbar() {
    const tabs = [
        {id: 'content', label: 'Conteúdo', path: '/conteudos', icon: <AiFillRead/>},
        {id: 'about', label: 'Sobre', path: '/', icon: <BsPersonCircle/>},
        {id: 'products', label: 'Produtos' , path: '/produtos', icon: <FiPackage/> },
    ]

    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    const [isScreenWidthLarge, setIsScreenWidthLarge] = useState(window.innerWidth > 540);

    useEffect(() => {
        const handleResize = () => {
            setIsScreenWidthLarge(window.innerWidth > 540);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        scrollToTop();
    }, [location.pathname]);

    return (
        <div className = "navcontainer">
            <div className="navbar">
                {tabs.map((tab) => (
                    <Link 
                    key={tab.id}
                    to={tab.path}
                    className = "navlink"
                    >
                    <div className="navlink__wrapper">
                        {isScreenWidthLarge && <span className="navlink__label">{tab.label}</span>}
                        <span className = "navlink__icon">{tab.icon}</span>
                        {isActive(tab.path) && (
                            <motion.div
                                className = "pill"
                                initial={{ opacity: 0, scale: 0.9 }} 
                                animate={{ opacity: 1, scale: 1 }}  
                                transition={{
                                    ease: "easeInOut",
                                    duration: 0.5
                                }}
                            />
                        )}
                    </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Navbar;
