import About from './pages/About';
import WorkWithMe from './pages/WorkWithMe';
import Agenda from './pages/Agenda';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className = "app">
        < Routes>
          <Route path = "/" element = {<About />}/>
          <Route path = "/construacomigo" element = {<WorkWithMe />}/>
          <Route path = "/agenda" element = {<Agenda />}/>
        </Routes>
    </div>
  );
}

export default App
