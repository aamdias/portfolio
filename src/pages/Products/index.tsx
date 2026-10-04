import products from '../../data/products.json';
import { usePageTitle } from '../../hooks/usePageTitle';
import './products.scss';
export default function ProductsPage() {
  usePageTitle('Produtos');
  return (
    <div className="container page-content">
      <header className="page-heading">
        <h1>Produtos</h1>
        <p>Produtos que desenvolvi do zero, design e código.</p>
      </header>
      <div className="product-grid">
        {products.map((product) => (
          <a
            className="product-card"
            key={product.title}
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={product.image} alt={`Página inicial de ${product.title}`} loading="lazy" />
            <div className="product-card__title">
              <h2>{product.title}</h2>
              <span>{product.domain} ↗</span>
            </div>
            <p>{product.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
