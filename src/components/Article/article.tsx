import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './article.scss';

type ArticleProps = {
    title: string;
    description: string;
    publishedDate: string;
    externalLink: string;
    slug: string;
    thumbnail: string;
};

function Article({ title, description, publishedDate, slug, thumbnail }: ArticleProps) {
    return (
        <motion.article
            className="article"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
        >
            <Link to={`/artigos/${slug}`} className="article__link-wrapper">
                <div className="article__image">
                    <img src={thumbnail} alt={title} className="article__thumbnail" />
                </div>

                <div className="article__content">
                    <div className="article__meta">
                        <time className="article__date">{publishedDate}</time>
                    </div>

                    <h2 className="article__title">{title}</h2>
                    <p className="article__description">{description}</p>

                    <span className="article__cta">
                        Ler artigo
                    </span>
                </div>
            </Link>
        </motion.article>
    );
}

export default Article;
