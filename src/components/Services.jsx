import React from 'react';
import {
  FaInstagram,
  FaPenNib,
  FaLaptopCode,
  FaVideo,
  FaEnvelopeOpenText,
  FaPaintBrush,
  FaBullhorn,
  FaUserTie,
  FaSearch
} from 'react-icons/fa';

const services = [
  {
    title: 'Social Media Marketing',
    icon: <FaInstagram />,
    desc: 'Boost your brand\'s online presence through targeted social campaigns and community engagement.',
    cursor: 'insta'
  },
  {
    title: 'Content Creation',
    icon: <FaPenNib />,
    desc: 'Craft compelling blog posts, visuals, and videos that resonate with your audience.',
    cursor: 'pen'
  },
  {
    title: 'Web Site Development',
    icon: <FaLaptopCode />,
    desc: 'Build fast, responsive, and attractive websites tailored to your business goals.',
    cursor: 'dev'
  },
  {
    title: 'Video Editing',
    icon: <FaVideo />,
    desc: 'High-quality editing for promotional, tutorial, and social media videos.',
    cursor: 'vdo'
  },
  {
    title: 'E-mail Marketing',
    icon: <FaEnvelopeOpenText />,
    desc: 'Reach and retain your customers through personalized, results-driven email campaigns.',
    cursor: 'mail'
  },
  {
    title: 'Graphics Designing',
    icon: <FaPaintBrush />,
    desc: 'Eye-catching visuals and designs to communicate your brand message effectively.',
    cursor: 'graph'
  },
  {
    title: 'Branding and Promotion',
    icon: <FaBullhorn />,
    desc: 'Develop a strong brand identity and promote it across various channels.',
    cursor: 'brand'
  },
  {
    title: 'Personal Branding',
    icon: <FaUserTie />,
    desc: 'Grow your individual influence with a strategy tailored to your unique skills and goals.',
    cursor: 'person'
  },
  {
    title: 'SEO',
    icon: <FaSearch />,
    desc: 'Improve search engine rankings and drive organic traffic to your site with smart SEO practices.',
    cursor: 'seo'
  }
];

const Services = () => {
  const getCursorStyle = (cursorName) => ({
    backgroundColor: "rgba(31, 29, 29, 1)",
    cursor: `url('/mouse/${cursorName}.svg') 4 4, auto`
  });

  return (
    <section className="bg-black text-white py-16 px-6">
      <div>
        <span
          className="text-[#F58327] text-xs font-black uppercase tracking-wide inline-flex items-center px-3 py-1 rounded-full bg-white/10 mb-4"
          style={{ fontFamily: "Inter" }}
        >
          Services
        </span>
      </div>

      <h2
        className="text-6xl font-bold text-center mb-12 text-white"
        style={{ fontFamily: "Unbounded Placeholder, sans-serif" }}
      >
        What we are Offering
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="rounded-2xl p-6 shadow-lg transition hover:scale-[1.02] duration-300 flex flex-col justify-between"
            style={getCursorStyle(service.cursor)}
          >
            <div>
              <div className="text-2xl mb-4 text-orange-400">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-500 text-sm">{service.desc}</p>
            </div>
            <button className="mt-6 text-white font-semibold flex items-center gap-1 hover:underline">
              LEARN MORE
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
