import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import ContactoPage from './pages/ContactoPage';
import EquiposPage from './pages/EquiposPage';
import GrandesPremiosPage from './pages/GrandesPremiosPage';
import HomePage from './pages/Homepage';
import NoticiasPage from './pages/Noticiaspage';


function App() {
  return (
      <Router>
          <Header></Header>
          <Nav />
          <Routes>
            <Route path = "/" exact element = {<HomePage />} />
            <Route path = "/noticias" exact element = {<NoticiasPage />} />
            <Route path = "/contacto" exact element = {<ContactoPage />} />
            <Route path = "/equipos" exact element = {<EquiposPage />} />
            <Route path = "/GP" exact element = {<GrandesPremiosPage />} />
          </Routes>
          <Footer />
      </Router>
 
  );
}

export default App;
