import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './menucard.scss';

type MenuCardProps = {
    title: string;
    description: string;
    link: string;
    isExternalLink?: boolean;
    image?: string;
}

export default function MenuCard({ title, description, link, isExternalLink = false, image }: MenuCardProps) {
    const cta = isExternalLink ? 'Visitar' : 'Ver mais';

    const cardContent = (
        <>
            {image && (
                <div className="card__image">
                    <img src={`${image}`} alt={title} />
                </div>
            )}
            <div className="card__content">
                <h2 className="card__title">{title}</h2>
                <p className="card__description">{description}</p>
            </div>
            <div className="card__footer">
                <span className="card__link">{cta}</span>
            </div>
        </>
    );

    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
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
