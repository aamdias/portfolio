import { Link } from 'react-router-dom';
import { usePageTitle } from '../../hooks/usePageTitle';
export default function NotFound() {
  usePageTitle('Página não encontrada');
  return (
    <div className="container page-content">
      <header className="page-heading">
        <h1>Página não encontrada.</h1>
        <p>Esse endereço não está disponível. Explore os artigos ou volte para o início.</p>
      </header>
      <Link className="button-primary" to="/">
        Voltar para o início →
      </Link>
    </div>
  );
}
