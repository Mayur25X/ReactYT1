import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
// import About from "./pages/About";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

import Header from "./components/Header";

import "./styles/App.scss";
import "./styles/Header.scss";
import "./styles/Home.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/mediaQuery.scss";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact></Contact>} />
          <Route path="*" element={<h1>Not Found</h1>} />
          <Route path="/services" element={<Services></Services>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
