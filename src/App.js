import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Location from './pages/Location';
import Error404 from './pages/Error404';

function App() {
  return (
    <main>
      <div className="container">
        {' '}
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/location" element={<Location />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </main>
  );
}

export default App;
