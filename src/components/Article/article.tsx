import { Link } from 'react-router-dom';
import type { CSSProperties } from 'react';
import articles from '../../data/articles.json';
import './article.scss';
type ArticleData = (typeof articles)[number];
export default function Article({
  article,
  home = false,
  index = 0,
}: {
  article: ArticleData;
  home?: boolean;
  index?: number;
}) {
  const meta = (
    <span className="article-meta">
      <time dateTime={article.date}>{article.publishedDate}</time> · {article.minutes} min
      {!home && ' de leitura'}
    </span>
  );
  return (
    <Link
      to={`/artigos/${article.slug}`}
      className={`article-row${home ? ' article-row--home' : ''}`}
      style={{ '--delay': `${380 + index * 70}ms` } as CSSProperties}
    >
      {home && meta}
      <h3>{article.title}</h3>
      <p>{article.description}</p>
      {!home && meta}
    </Link>
  );
}
