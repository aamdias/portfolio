import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Agenda from './pages/Agenda';
import ArticlePage from './pages/ArticlePage';
import ContentPage from './pages/Content';
import ProductsPage from './pages/Products';
import BookmarksPage from './pages/Bookmarks';
import NotFound from './pages/NotFound';

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return (
    <>
      <a className="skip-link" href="#main-content">
        Pular para o conteúdo
      </a>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/artigos" element={<ContentPage />} />
          <Route path="/produtos" element={<ProductsPage />} />
          <Route path="/bookmarks" element={<BookmarksPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/artigos/:slug" element={<ArticlePage />} />
        <Route path="/conteudos" element={<Navigate to="/artigos" replace />} />
        <Route path="/construacomigo" element={<Navigate to="/sobre" replace />} />
      </Routes>
    </>
  );
}
export default App;
