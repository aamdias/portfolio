import { Link } from 'react-router-dom';
import Article from '../../components/Article/article';
import ContactActions from '../../components/ContactActions';
import articles from '../../data/articles.json';
import products from '../../data/products.json';
import { bookmarks, categories } from '../../data/bookmarks';
import { links } from '../../data/links';
import { usePageTitle } from '../../hooks/usePageTitle';
import './home.scss';

export default function Home() {
  usePageTitle();
  return (
    <div className="container">
      <section className="home-hero">
        <h1>Construindo produtos digitais que fazem a diferença.</h1>
        <p>
          Entusiasta de tecnologia e empreendedorismo. Hoje, no time fundador da{' '}
          <a
            className="inline-link"
            href="https://vetto.ai"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vetto AI
          </a>
          , construindo sistemas para avaliar e melhorar a inteligência artificial.
        </p>
        <div className="home-hero__links">
          <Link className="inline-link" to="/sobre">
            Sobre mim
          </Link>
          <Link to="/agenda">Agenda</Link>
          <a href={links.github} target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </a>
        </div>
      </section>
      <div className="home-columns">
        <section className="home-articles">
          <div className="section-label">
            <h2>Artigos</h2>
            <Link to="/artigos">Ver todos</Link>
          </div>
          {articles.map((article, index) => (
            <Article key={article.slug} article={article} home index={index} />
          ))}
        </section>
        <aside className="home-sidebar">
          <section>
            <div className="section-label">
              <h2>Produtos</h2>
              <Link to="/produtos">Ver todos</Link>
            </div>
            <div>
              {products.map((product) => (
                <a
                  className="mini-product"
                  key={product.title}
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={product.image} width="64" height="44" alt="" loading="lazy" />
                  <span>
                    <strong>{product.title}</strong>
                    <span>{product.short}</span>
                  </span>
                </a>
              ))}
            </div>
          </section>
          <section>
            <div className="section-label">
              <h2>Bookmarks</h2>
              <Link to="/bookmarks">Ver curadoria</Link>
            </div>
            {categories.map((category) => (
              <Link className="category-row" key={category.id} to={`/bookmarks#${category.id}`}>
                <span>{category.label}</span>
                <span>
                  {bookmarks.filter((bookmark) => bookmark.category === category.id).length}
                </span>
              </Link>
            ))}
          </section>
          <section className="home-contact">
            <h2 className="label">Trabalhe comigo</h2>
            <p>
              Quer ajuda para construir produtos digitais? Trabalho com serviços personalizados.
            </p>
            <ContactActions />
          </section>
        </aside>
      </div>
    </div>
  );
}
