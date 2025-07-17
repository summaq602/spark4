import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Blogs from "./components/Blogs";
import BlogDetail from "./components/BlogDetail";
import BlogsPage from "./components/BlogsPage";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import faq, { Faq } from "./components/Faq"

const Home = () => (
  <>
    <div id="home">
      <Hero />
    </div>
    <div id="services">
      <Services />
    </div>
    <div id="faq">
      <Faq />
    </div>
    <div id="contact">
      <ContactForm />
    </div>
     <div id="footer">
      <Footer />
    </div>
  </>
);

const App = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<ProjectsSection />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
    </div>
  );
};

export default App;
