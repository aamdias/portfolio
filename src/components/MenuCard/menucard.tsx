import { HiArrowRight } from 'react-icons/hi';
import { FiBookOpen, FiPackage, FiUsers, FiCalendar } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './menucard.scss'; 

type MenuCardProps = {
  title: string;
  description: string;
  link: string;
  isExternalLink?: boolean;
  icon?: 'content' | 'products' | 'build' | 'calendar';
}

const iconMap = {
    content: FiBookOpen,
    products: FiPackage,
    build: FiUsers,
    calendar: FiCalendar
};

const ctaMap = {
    content: 'Ver Conteúdos',
    products: 'Ver Produtos',
    build: 'Construa Comigo',
    calendar: 'Ver Agenda'
};

export default function MenuCard({ title, description, link, isExternalLink = false, icon }: MenuCardProps) {
    const Icon = icon ? iconMap[icon] : null;
    const cta = icon ? ctaMap[icon] : (isExternalLink ? 'Visitar site' : 'Saiba mais');

    const cardContent = (
        <>
            {Icon && (
                <div className="card__icon">
                    <Icon />
                </div>
            )}
            <div className="card__content">
                <h2 className="card__title">{title}</h2>
                <p className="card__description">{description}</p>
            </div>
            
            <div className="card__footer">
                <span className="card__link">
                    {cta}
                    <HiArrowRight className="card__arrow" />
                </span>
            </div>
        </>
    );

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="card"
        >
            {isExternalLink ? (
                <a 
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card__inner"
                >
                    {cardContent}
                </a>
            ) : (
                <Link 
                    to={link}
                    className="card__inner"
                >
                    {cardContent}
                </Link>
            )}
        </motion.div>
    );
}
