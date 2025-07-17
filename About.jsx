import { useState } from "react";
import bannerImg from "../assets/banner.jpg"; // your banner image

const About = () => {
  const [isMissionOpen, setIsMissionOpen] = useState(false);
  const [isVisionOpen, setIsVisionOpen] = useState(false);

  return (
    <div className="bg-black min-h-screen p-2">
      {/* Banner Section */}
      <div className="relative rounded-3xl overflow-hidden w-full max-w-[1100px] mx-auto my-10 shadow-xl bg-[#111]">
        <img
          src={bannerImg}
          alt="Spark Tech Banner"
          className="w-full h-[300px] object-cover block"
        />
        <div
          className="absolute inset-0 pointer-events-none rounded-3xl"
          style={{ boxShadow: "inset 0 -80px 80px -10px rgba(0,0,0,0.7)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-full h-full flex items-end justify-center p-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.0) 60%, rgba(0,0,0,0.7) 100%)",
          }}
        >
          <h1 className="text-white text-4xl font-bold text-center leading-tight m-0">
            Hey There! Welcome<br />
            to <span className="text-orange-400">Spark Tech!</span>
          </h1>
        </div>
      </div>

      {/* About Section */}
      <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 mb-4">
            <span
              className="text-[#F58327] text-xs font-black uppercase tracking-wide"
              style={{ fontFamily: "Inter" }}
            >
              Who Are We
            </span>
          </div>
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-8 tracking-tight ml-6">
            About our Company
          </h1>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Description */}
            <div className="flex-1">
              <p className="text-gray-300 text-2xl md:text-3xl leading-snug mb-0 pl-[20] ml-8">
                <span className="font-bold text-white">At SPARKTECH,</span> At SPARKTECH, we specialize in crafting innovative strategies that help brands connect with their audience and achieve measurable growth. Our expert team is dedicated to transforming ideas into results, turning clicks into loyal customers. Let us help you create a lasting digital presence and unlock your brand's full potential.
              </p>
            </div>

            {/* Mission and Vision */}
            <div className="flex-1 flex flex-col gap-6">
              {/* Mission */}
              

                <div
                  onClick={() => setIsMissionOpen(!isMissionOpen)}
                  className={`group cursor-pointer bg-[#232323] hover:bg-[#1f1f1f] transition-all duration-300 ease-in-out rounded-2xl px-8 py-6 shadow-inner border border-[#333]`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-medium text-gray-200 group-hover:text-orange-400 transform transition-transform duration-300 group-hover:translate-x-2">
      <span className="text-gray-400 font-mono mr-2">01.</span> Our Mission
    </span>
    <div className="w-10 h-10 rounded-full bg-[#333] flex items-center justify-center text-2xl text-gray-400 group-hover:text-orange-400 transition">
      {isMissionOpen ? "-" : "+"}
    </div>
  </div>
  {isMissionOpen && (
    <p className="text-gray-400 mt-4">
      Our mission is to deliver top-tier software and digital solutions that
      empower businesses and enhance user experiences.
    </p>
  )}
</div>

              

              {/* Vision */}
              <div
  onClick={() => setIsVisionOpen(!isVisionOpen)}
  className={`group cursor-pointer bg-[#232323] hover:bg-[#1f1f1f] transition-all duration-300 ease-in-out rounded-2xl px-8 py-6 shadow-inner border border-[#333]`}
>
  <div className="flex items-center justify-between">
    <span className="text-xl font-medium text-gray-200 group-hover:text-orange-400 transform transition-transform duration-300 group-hover:translate-x-2">
      <span className="text-gray-400 font-mono mr-2">02.</span> Our Vision
    </span>
    <div className="w-10 h-10 rounded-full bg-[#333] flex items-center justify-center text-2xl text-gray-400 group-hover:text-orange-400 transition">
      {isVisionOpen ? "-" : "+"}
    </div>
  </div>
  {isVisionOpen && (
    <p className="text-gray-400 mt-4">
      We envision Spark Tech as a global leader in innovation, known for
      transforming ideas into impactful digital realities.
    </p>
  )}
</div>

           
        </div>
      </div>

      {/* Our Leader Section */}
<div className="bg-black px-6 py-20 ">
  <div className="max-w-6xl mx-auto md:px-5">
    {/* Top Heading Row */}
    <div className="flex items-center gap-4 mb-6">
      <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 mb-4">
            <span
              className="text-[#F58327] text-xs font-black uppercase tracking-wide"
              style={{ fontFamily: "Inter" }}
            >
              ABOUT FOUNDER
            </span>
          </div>
      <h2 className="text-white text-2xl md:text-5xl font-bold">Meet the Founder</h2>
    </div>

    {/* Paragraph intro */}
    <p className="text-gray-400 mb-12 max-w-4xl text-3xl">
      At Spark Tech, our leadership is driven by a passion for innovation and a deep understanding of digital transformation. Our founder leads by example, constantly pushing the boundaries to help clients thrive in a fast-evolving tech landscape.
    </p>

    {/* Image + Bio Row */}
    <div className="flex flex-col md:flex-row items-center gap-10">
      {/* Left: Image Block */}
      <div className="relative w-[300px] h-[350px]">
        {/* Orange background circle */}
        <div className="absolute top-0 left-0 w-full h-full bg-orange-500 rounded-t-full z-0" />
        {/* Leader image */}
        <img
          src="/leader.jpg"
          alt="Leader"
          className="relative z-10 w-full h-full object-cover rounded-t-full grayscale border-t-[8px] border-orange-500"
        />
        {/* Name overlay */}
        <div className="absolute bottom-[-30px] left-0 w-full text-center z-20">
          <h3 className="text-2xl font-bold text-orange-400">JAMES</h3>
          <h3 className="text-2xl font-bold text-white -mt-1">ANDRWEWS</h3>
        </div>
      </div>

      {/* Right: Paragraph about leader */}
      <div className="text-gray-400 max-w-xl text-2xl leading-relaxed">
        James Andrews is a visionary entrepreneur and the driving force behind Spark Tech. With a background in full-stack development and a knack for turning complex challenges into simple solutions, he has led the company to new heights. His leadership is built on innovation, integrity, and relentless focus on quality.
      </div>
    </div>
  </div>
</div>

      {/* Our Team Section */}
      <div className="bg-black py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-12">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              {
                name: "Aishwarya Rai",
                role: "UI/UX Designer",
                image: "/member1.png",
              },
              {
                name: "Arjun Kapoor",
                role: "Frontend Developer",
                image: "/member2.jpg",
              },
              {
                name: "Priya Singh",
                role: "Project Manager",
                image: "/member3.png",
              },
            ].map((member, i) => (
              <div
                key={i}
                className="bg-[#1a1a1a] rounded-2xl p-6 text-center shadow-lg hover:shadow-orange-400/30 transition duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-2 border-orange-400"
                />
                <h4 className="text-xl font-semibold text-white">
                  {member.name}
                </h4>
                <p className="text-orange-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
