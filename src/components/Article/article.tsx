import './article.scss';

type ArticleProps = {
    title: string;
    description: string;
    publishedDate: string;
    externalLink: string;
    thumbnail: string;
};

function Article({title, description, publishedDate, externalLink, thumbnail}:ArticleProps) {
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
                <a href={externalLink} target="_blank" rel="noopener noreferrer" className="article__link">
                Ler artigo
                </a>
            </div>
      </div>
    );
}

export default Article;