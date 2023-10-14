import './Navbar.scss';
import { useLocation, Link } from 'react-router-dom';

function Navbar() {
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <div className="navbar">
            <Link to="/" className = {isActive('/') ? 'navlink navlink__active' : 'navlink' } >Sobre</Link>
            <Link to="/construacomigo" className = {isActive('/construacomigo') ? 'navlink navlink__active' : 'navlink' }>Construa comigo</Link>
        </div>
    );
}

export default Navbar;
