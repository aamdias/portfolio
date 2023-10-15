import './navbar.scss';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Navbar() {
    const tabs = [
        {id: 'about', label: 'Sobre', path: '/'},
        {id: 'build-with-me', label: 'Construa comigo' , path: '/construacomigo'},
    ]

    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <div className="navbar">
            {tabs.map((tab) => (
                <Link 
                key={tab.id}
                to={tab.path}
                className = "navlink"
                >
                <span className = "navlink__label">{tab.label}</span>
                {isActive(tab.path) && (
                    <motion.div
                        layoutId = "active-pill"
                        className = "pill"
                    />
                )}
                </Link>
            ))}
        </div>
    );
}

export default Navbar;
