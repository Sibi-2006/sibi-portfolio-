import React, { useState } from 'react';
import { FaEnvelope as Mail, FaPhone as Phone, FaMapMarkerAlt as MapPin, FaGithub as Github, FaLinkedin as Linkedin, FaPaperPlane as Send } from 'react-icons/fa';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill all fields!');
      return;
    }

    // Format message for WhatsApp
    const whatsappMessage = `*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Subject:* ${formData.subject}\n\n*Message:*\n${formData.message}`;
    
    // WhatsApp API URL
    const whatsappURL = `https://wa.me/7598382584?text=${encodeURIComponent(whatsappMessage)}`;

    // Open WhatsApp
    window.open(whatsappURL, '_blank');

    // Show success message
    setSubmitted(true);
    
    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <section id="contact" className="min-h-screen bg-black py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Let's Connect
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Have a project in mind? Or just want to chat about MERN stack, coding, or calisthenics?
            I'd love to hear from you!
          </p>
          <div className="h-1 w-24 bg-[#00BFFF] mx-auto mt-6"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* LEFT SIDE - Contact Form */}
          <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-[#00BFFF]/30 rounded-2xl p-8 md:p-10 hover:border-[#00BFFF]/60 transition-all duration-300">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Send size={28} className="text-[#00BFFF]" />
              Send Me a Message
            </h3>

            {submitted && (
              <div className="mb-6 p-4 bg-[#00BFFF]/20 border border-[#00BFFF] rounded-lg text-[#00BFFF] text-center animate-pulse">
                 ✓ Redirecting to WhatsApp... 📱
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label className="block text-gray-300 font-semibold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g., John Doe"
                  className="w-full bg-black border-2 border-[#00BFFF]/30 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#00BFFF] focus:shadow-lg focus:shadow-[#00BFFF]/20 transition-all duration-300"
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-gray-300 font-semibold mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="e.g., your.email@example.com"
                  className="w-full bg-black border-2 border-[#00BFFF]/30 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#00BFFF] focus:shadow-lg focus:shadow-[#00BFFF]/20 transition-all duration-300"
                />
              </div>

              {/* Subject Input */}
              <div>
                <label className="block text-gray-300 font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="e.g., Freelance Project Opportunity"
                  className="w-full bg-black border-2 border-[#00BFFF]/30 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#00BFFF] focus:shadow-lg focus:shadow-[#00BFFF]/20 transition-all duration-300"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label className="block text-gray-300 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project, ideas, or just say hi!"
                  rows={6}
                  className="w-full bg-black border-2 border-[#00BFFF]/30 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#00BFFF] focus:shadow-lg focus:shadow-[#00BFFF]/20 transition-all duration-300 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#00BFFF] hover:bg-cyan-500 text-black font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-[#00BFFF]/50 flex items-center justify-center gap-2 text-lg"
              >
                <Send size={20} />
                Send via WhatsApp
              </button>
            </form>
          </div>

          {/* RIGHT SIDE - Contact Info */}
          <div className="space-y-6">
            {/* Direct Contact Cards */}
            <div className="bg-gradient-to-br from-[#00BFFF]/10 to-black border-2 border-[#00BFFF]/30 rounded-2xl p-6 md:p-8 hover:border-[#00BFFF]/60 hover:shadow-lg hover:shadow-[#00BFFF]/20 transition-all duration-300">
              <div className="flex items-center gap-4 mb-2">
                <Mail size={28} className="text-[#00BFFF]" />
                <div>
                  <p className="text-gray-400 text-sm font-semibold uppercase">Email</p>
                  <a
                    href="mailto:sibirajr0709@gmail.com"
                    className="text-white font-bold text-lg hover:text-[#00BFFF] transition-colors"
                  >
                    sibirajr0709@gmail.com
                  </a>
                </div>
              </div>
              <p className="text-gray-500 text-sm ml-12">I respond quickest to emails</p>
            </div>

            <div className="bg-gradient-to-br from-[#00BFFF]/10 to-black border-2 border-[#00BFFF]/30 rounded-2xl p-6 md:p-8 hover:border-[#00BFFF]/60 hover:shadow-lg hover:shadow-[#00BFFF]/20 transition-all duration-300">
              <div className="flex items-center gap-4 mb-2">
                <Phone size={28} className="text-[#00BFFF]" />
                <div>
                  <p className="text-gray-400 text-sm font-semibold uppercase">Phone</p>
                  <a
                    href="tel:7598382584"
                    className="text-white font-bold text-lg hover:text-[#00BFFF] transition-colors"
                  >
                    +91 75983 82584
                  </a>
                </div>
              </div>
              <p className="text-gray-500 text-sm ml-12">Available for calls & WhatsApp</p>
            </div>

            <div className="bg-gradient-to-br from-[#00BFFF]/10 to-black border-2 border-[#00BFFF]/30 rounded-2xl p-6 md:p-8 hover:border-[#00BFFF]/60 hover:shadow-lg hover:shadow-[#00BFFF]/20 transition-all duration-300">
              <div className="flex items-center gap-4 mb-3">
                <MapPin size={28} className="text-[#00BFFF]" />
                <div>
                  <p className="text-gray-400 text-sm font-semibold uppercase">Location</p>
                  <p className="text-white font-bold text-lg">
                    Mayiladuthurai, Tamil Nadu
                  </p>
                </div>
              </div>
              <p className="text-gray-500 text-sm ml-12">India (Open to remote opportunities)</p>
            </div>

            {/* Social Links Section */}
            <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-[#00BFFF]/30 rounded-2xl p-8 mt-8">
              <h4 className="text-xl font-bold text-white mb-6">Connect on Social</h4>
              <div className="space-y-4">
                <a
                  href="https://github.com/Sibi-2006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-black border-2 border-[#00BFFF]/30 rounded-lg hover:border-[#00BFFF] hover:shadow-lg hover:shadow-[#00BFFF]/30 transition-all duration-300 group"
                >
                  <Github size={24} className="text-[#00BFFF] group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-gray-400 text-sm">GitHub</p>
                    <p className="text-white font-semibold">github.com/Sibi-2006</p>
                  </div>
                  <span className="ml-auto text-[#00BFFF]">→</span>
                </a>

                <a
                  href="https://linkedin.com/in/sibiraj-r-147936336"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-black border-2 border-[#00BFFF]/30 rounded-lg hover:border-[#00BFFF] hover:shadow-lg hover:shadow-[#00BFFF]/30 transition-all duration-300 group"
                >
                  <Linkedin size={24} className="text-[#00BFFF] group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-gray-400 text-sm">LinkedIn</p>
                    <p className="text-white font-semibold">Sibiraj R</p>
                  </div>
                  <span className="ml-auto text-[#00BFFF]">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-[#00BFFF]/10 to-transparent border-2 border-[#00BFFF]/30 rounded-2xl p-8 md:p-10">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Don't be shy! 👋
          </h3>
          <p className="text-gray-400 text-lg">
            Whether you have a project, a question, or just want to chat about tech and development —
            feel free to reach out. I'm always excited to connect with fellow developers!
          </p>
        </div>
      </div>
    </section>
  );
};
