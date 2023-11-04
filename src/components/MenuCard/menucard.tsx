import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './menucard.scss'; 

type MenuCardProps = {
  title: string;
  description: string;
  link: string; // Assuming this is the URL to which the card will redirect
}

export default function MenuCard ({ title, description, link } : MenuCardProps){
    return (
        <Link
            to={link}
            className="menu-card-component"
        >
          <div className="menu-card-content">
            <h2 className="menu-card-title">{title}</h2>
            <p className="menu-card-description">{description}</p>
          </div>
          <div className="menu-card-action">
            <AiOutlineArrowRight />
          </div>
        </Link>
      );


}
