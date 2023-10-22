import About from './pages/About';
import WorkWithMe from './pages/WorkWithMe';
import Agenda from './pages/Agenda';
import { SkeletonTheme } from 'react-loading-skeleton';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className = "app">
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        < Routes>
          <Route path = "/" element = {<About />}/>
          <Route path = "/construacomigo" element = {<WorkWithMe />}/>
          <Route path = "/agenda" element = {<Agenda />}/>
        </Routes>
      </SkeletonTheme>
    </div>
  );
}

export default App
