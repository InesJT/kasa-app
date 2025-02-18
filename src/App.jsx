import './App.scss';

import { BrowserRouter, Route, Routes } from 'react-router';

import Header from './components/header';
import Footer from './components/footer';

import Home from './pages/home';
import About from './pages/about';
import Accommodation from './pages/accommodation';
import NotFound from './pages/error';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/accommodation/:id" element={<Accommodation />} />
        <Route path="/error" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
