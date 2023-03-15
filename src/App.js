import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Location from './pages/Location';
import Error404 from './pages/Error404';

function App() {
  return (
    <>
      <main>
        <div className="container">
          {' '}
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route exact path="location/:locationId" element={<Location />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </BrowserRouter>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
