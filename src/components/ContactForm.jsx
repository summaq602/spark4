import React, { useState } from "react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint =
      "https://corsproxy.io/?" +
      encodeURIComponent(
        "https://script.google.com/macros/s/AKfycbz--8rhEByCfw1j70H_g-NI7ShrwfnN880zBjsGDmbIScHyxTuyHnSgznFrFzid3hep-g/exec",
      );

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setShowToast(true);
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => {
          setShowToast(false);
        }, 3000);
      } else {
        alert("Error submitting. Try again.");
      }
    } catch (err) {
      alert("Something went wrong: " + err.message);
    }
  };

  return (
    <section className="w-full min-h-screen bg-black py-8 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
          <div className="text-center lg:text-left space-y-6">
            <h2
              className="text-white text-[56px] sm:text-[80px] md:text-[120px] lg:text-[150px] xl:text-[170px] font-normal leading-[1] tracking-tight"
              style={{ fontFamily: "Unbounded" }}
            >
              <span className="block text-white">Let's</span>
              <span className="block text-[#F58327] pl-1">Talk!</span>
            </h2>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-[30px] p-6 sm:p-10 w-full max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label className="text-xs font-medium text-[#888]">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-4 m-2 bg-gray-500/15 border border-gray-500/10 rounded-[20px] text-sm text-gray-300 placeholder-gray-400"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-medium text-[#888]">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full px-4 py-4 m-2 bg-gray-500/15 border border-gray-500/10 rounded-[20px] text-sm text-gray-300 placeholder-gray-400"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-medium text-[#888]">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Write your message"
                  className="w-full px-4 py-3 m-2 bg-gray-500/15 border border-gray-500/10 rounded-[20px] text-sm text-gray-300 placeholder-gray-400 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#F58327] rounded-[10px] text-[#0A0A0A] text-base font-semibold hover:bg-[#e6751f] transition-all duration-200"
              >
                Submit
              </button>

              {showToast && (
                <div className="mt-4 p-3 bg-green-500/20 border border-green-500/30 rounded-[10px] text-green-400 text-sm font-medium text-center transition-all duration-300">
                  Our team will contact you!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
