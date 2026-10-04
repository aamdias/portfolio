import { Link } from 'react-router-dom';
import { links } from '../../data/links';
import './footer.scss';
export default function Footer() {
  return (
    <footer className="site-footer container">
      <span>© {new Date().getFullYear()} Alan Dias · Campinas, SP</span>
      <div>
        <Link to="/agenda">Agenda</Link>
        <a href={links.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href={links.source} target="_blank" rel="noopener noreferrer">
          Este site é open source
        </a>
      </div>
    </footer>
  );
}
