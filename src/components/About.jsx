import bannerImg from "../assets/banner.jpg"; 

const About = () => (
<div className="bg-black min-h-screen p-2">
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
      <h1
        className="text-white text-4xl font-bold text-center leading-tight m-0"
      >
        Hey There! Welcome<br />
        to <span className="text-orange-400">Spark Tech!</span>
      </h1>
    </div>
    
  </div>
  <div className="bg-black min-h-screen px-4 py-8">
    {/* Section Container */}
    <div className="max-w-7xl mx-auto pt-16">
      {/* "Who We Are" Badge */}
      <div className="flex items-center gap-4 mb-4">
        <span className="bg-orange-400 text-black font-semibold rounded-full px-5 py-2 text-sm shadow-md">
          WHO WE ARE
        </span>
      </div>
      {/* Title */}
      <h1 className="text-white text-5xl md:text-6xl font-bold mb-8 tracking-tight">
        About our Company
      </h1>
      {/* Content Row */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left: Description */}
        <div className="flex-1">
          <p className="text-gray-300 text-2xl md:text-3xl leading-snug mb-0">
            <span className="font-bold text-white">At SPARKTECH,</span> we specialize in crafting innovative strategies that help brands connect with their audience and achieve measurable growth. Our expert team is dedicated to transforming ideas into results, turning clicks into loyal customers. Let us help you create a lasting digital presence and unlock your brand's full potential.
          </p>
        </div>
        {/* Right: Mission & Vision */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Mission */}
          <div className="bg-[#232323] rounded-2xl px-8 py-6 flex items-center justify-between shadow-inner border border-[#333]">
            <span className="text-gray-200 text-xl font-medium">
              <span className="text-gray-400 font-mono mr-2">01.</span> Our Mission
            </span>
            <button className="w-10 h-10 rounded-full bg-[#333] flex items-center justify-center text-2xl text-gray-400 hover:bg-[#444] transition">
              +
            </button>
          </div>
          {/* Vision */}
          <div className="bg-[#232323] rounded-2xl px-8 py-6 flex items-center justify-between shadow-inner border border-[#333]">
            <span className="text-gray-200 text-xl font-medium">
              <span className="text-gray-400 font-mono mr-2">02.</span> Our Vision
            </span>
            <button className="w-10 h-10 rounded-full bg-[#333] flex items-center justify-center text-2xl text-gray-400 hover:bg-[#444] transition">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
);

export default About;
