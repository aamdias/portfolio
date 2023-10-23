import './navbar.scss';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BsPersonCircle } from 'react-icons/bs';
import { MdOutlineWork } from 'react-icons/md';
import { AiOutlineCalendar } from 'react-icons/ai';
import { useState, useEffect } from 'react';

function Navbar() {
    const tabs = [
        {id: 'agenda', label: 'Agenda', path: '/agenda', icon: <AiOutlineCalendar/>},
        {id: 'about', label: 'Sobre', path: '/', icon: <BsPersonCircle/>},
        {id: 'build-with-me', label: 'Construa comigo' , path: '/construacomigo', icon: <MdOutlineWork/> },
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
                                layoutId = "active-pill"
                                className = "pill"
                                layout="position"
                                transition={{
                                    ease: "linear",
                                    type: "spring", 
                                    stiffness: 100,
                                    duration: 1,
                                    x: { duration: 1 }
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
