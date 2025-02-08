import { BrowserRouter, Route, Routes } from "react-router";
import "./App.scss";

import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Accommodation from "./pages/Accommodation";
import NotFound from "./pages/NotFound";

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
