import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION } from '../constants';
import { GraduationCap, BookOpen, Calendar, Award, CheckCircle, Clock, MapPin } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="min-h-screen bg-black py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto ">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-white mb-4"
          >
            Education
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
          >
            My Academic Journey
          </motion.p>
          <div className="h-1 w-24 bg-[#00BFFF] mx-auto mt-6"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-[#00BFFF]/40 ml-4 md:ml-12 space-y-12 pb-8">
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className={`absolute -left-[11px] top-0 w-5 h-5 rounded-full border-4 border-black transition-all duration-300 ${edu.highlight ? 'bg-[#00BFFF] scale-125 shadow-[0_0_10px_#00BFFF]' : 'bg-[#00BFFF]/60'}`}></div>

              {/* Education Card */}
              <div className={`bg-gradient-to-br from-gray-900 to-black border-2 rounded-2xl p-6 md:p-8 transition-all duration-500 hover:scale-[1.02] group ${edu.highlight ? 'border-[#00BFFF]/60 shadow-[0_0_30px_rgba(0,191,255,0.15)] shadow-[#00BFFF]/10' : 'border-[#00BFFF]/30 hover:border-[#00BFFF]/60 hover:shadow-lg hover:shadow-[#00BFFF]/20'}`}>
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <BookOpen size={24} className="text-[#00BFFF]" />
                      <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#00BFFF] transition-colors">
                        {edu.institution}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 text-[#00BFFF] font-semibold mb-2">
                      <GraduationCap size={20} />
                      <span>{edu.qualification}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <MapPin size={16} />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-3">
                    <div className="flex items-center gap-2 px-4 py-1.5 bg-[#00BFFF]/10 border border-[#00BFFF]/30 rounded-full text-[#00BFFF] text-sm font-bold">
                      <Calendar size={16} />
                      {edu.duration}
                    </div>
                    <div className={`flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider ${edu.status === 'Currently Pursuing' ? 'bg-green-500/20 text-green-400 border border-green-500/50' : 'bg-gray-800 text-gray-400 border border-gray-700'}`}>
                      {edu.status === 'Currently Pursuing' ? <Clock size={14} /> : <CheckCircle size={14} />}
                      {edu.status}
                    </div>
                  </div>
                </div>

                {edu.percentage && (
                  <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10 w-fit mb-4">
                    <Award size={24} className="text-[#00BFFF]" />
                    <div>
                      <p className="text-gray-400 text-xs uppercase font-bold">Aggregate Score</p>
                      <p className="text-white text-xl font-black">{edu.percentage}</p>
                    </div>
                  </div>
                )}

                {edu.details && (
                  <div className="mt-4 p-4 bg-[#00BFFF]/5 border border-[#00BFFF]/20 rounded-xl">
                    <p className="text-gray-300 italic text-sm md:text-base leading-relaxed">
                      {edu.details}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
