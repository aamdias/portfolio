import About from './pages/About';
import WorkWithMe from './pages/WorkWithMe';
import Agenda from './pages/Agenda';
import ArticlePage from './pages/ArticlePage';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className = "app">
        < Routes>
          <Route path = "/" element = {<About />}/>
          <Route path = "/construacomigo" element = {<WorkWithMe />}/>
          <Route path = "/agenda" element = {<Agenda />}/>
          <Route path="/artigos/:slug" element={ <ArticlePage/>} />
        </Routes>
    </div>
  );
}

export default App
