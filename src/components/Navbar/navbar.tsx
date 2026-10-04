import { Link, NavLink } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle';
import './navbar.scss';

export default function Navbar() {
  return (
    <header className="site-header container">
      <Link to="/" className="wordmark" aria-label="Alan Dias, início">
        Alan Dias
      </Link>
      <div className="site-header__controls">
        <nav aria-label="Navegação principal">
          {[
            ['/artigos', 'Artigos'],
            ['/produtos', 'Produtos'],
            ['/bookmarks', 'Bookmarks'],
            ['/sobre', 'Sobre'],
          ].map(([path, label]) => (
            <NavLink key={path} to={path}>
              {label}
            </NavLink>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
