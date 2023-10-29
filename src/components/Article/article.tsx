import { Link } from 'react-router-dom';
import './article.scss';

type ArticleProps = {
    title: string;
    description: string;
    publishedDate: string;
    externalLink: string;
    slug: string;
    thumbnail: string;
};

function Article({title, description, publishedDate, externalLink, slug, thumbnail}:ArticleProps) {
    return(
        <div className="article">
            <div className = "article__contentwithphoto">
                <div className="article__content">
                    <h2 className="article__title">{title}</h2>
                    <p className="article__description">{description}</p>
                </div>
                <img src={thumbnail} alt={title} className="article__thumbnail" />
            </div>
            <div className="article__divider"></div>
            <div className="article__footer">
            <p className="article__date"> {publishedDate}</p>
                <Link to={`/artigos/${slug}`} className="article__link">Ler artigo</Link>
            </div>
      </div>
    );
}

export default Article;