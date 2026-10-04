import { Link } from 'react-router-dom';
import { links } from '../../data/links';
export default function ContactActions() {
  return (
    <div className="contact-actions">
      <a className="button-primary" href={links.whatsapp} target="_blank" rel="noopener noreferrer">
        Conversar no WhatsApp →
      </a>
      <Link to="/agenda" className="text-link">
        Ver agenda
      </Link>
    </div>
  );
}
