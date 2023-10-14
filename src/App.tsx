import About from './pages/About';
import WorkWithMe from './pages/WorkWithMe';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className = "app">
      < Routes>
        <Route path = "/" element = {<About />}/>
        <Route path = "/construacomigo" element = {<WorkWithMe />}/>
      </Routes>
    </div>
  );
}

export default App
