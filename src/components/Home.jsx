// src/components/Home.jsx
import Hero from './Hero';
import Services from './Services';
import Faq from './Faq';
import ContactForm from './ContactForm';

function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <div id="services">
        <Services />
      </div>
      <Faq />
      <div id="contact">
        <ContactForm />
      </div>
    </div>
  );
}


export default Home;
