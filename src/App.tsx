import About from './pages/About';
import WorkWithMe from './pages/WorkWithMe';
import Agenda from './pages/Agenda';
import ArticlePage from './pages/ArticlePage';
import ContentPage from './pages/Content';
import ProductsPage from './pages/Products';
import BookmarksPage from './pages/Bookmarks';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className = "app">
        < Routes>
          <Route path = "/" element = {<About />}/>
          <Route path = "/construacomigo" element = {<WorkWithMe />}/>
          <Route path = "/agenda" element = {<Agenda />}/>
          <Route path="/artigos/:slug" element={ <ArticlePage/>} />
          <Route path="/conteudos" element={ <ContentPage />} />
          <Route path="/produtos" element={ <ProductsPage />} />
          <Route path="/bookmarks" element={ <BookmarksPage />} />
        </Routes>
    </div>
  );
}

export default App
