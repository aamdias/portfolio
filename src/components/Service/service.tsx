import './service.scss';
import ReactMarkdown from 'react-markdown';

type ServiceProps = {
    title: string;
    description: string;
    availableSlots: string;
    price: string;
    externalLink: string;
};

function Article({title, description, price, externalLink}:ServiceProps) {
    return(
        <div className="service">
            <div className="service__content">
                <h2 className="service__title">{title}</h2>
                <p className="service__description">
                    <ReactMarkdown>{description}</ReactMarkdown>
                </p>
            </div>
            <div className="service__divider"></div>
            <div className="service__footer">
            <p className="service__price"> {price}</p>
            <a href={externalLink} target="_blank" rel="noopener noreferrer" className="service__link">
            Tenho interesse
            </a>
            </div>
      </div>
    );
}

export default Article;