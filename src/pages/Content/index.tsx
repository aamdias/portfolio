import articles from '../../data/articles.json';
import Article from '../../components/Article/article';
import { usePageTitle } from '../../hooks/usePageTitle';
import './content.scss';
export default function ContentPage() {
  usePageTitle('Artigos');
  const years = [...new Set(articles.map((article) => article.year))];
  return (
    <div className="container page-content">
      <header className="page-heading">
        <h1>Artigos</h1>
        <p>
          Sobre tecnologia, produto e empreendedorismo. Registro de alguns aprendizados no caminho.
        </p>
      </header>
      {years.map((year) => (
        <section className="article-year" key={year} aria-label={`Artigos de ${year}`}>
          <h2>{year}</h2>
          <div>
            {articles
              .filter((article) => article.year === year)
              .map((article) => (
                <Article article={article} key={article.slug} />
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
