import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const LanguageBar = ({ name, level }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start({ width: `${level}%` });
    }
  }, [inView, controls, level]);

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1 text-sm font-medium text-black">
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div ref={ref} className="w-full h-3 bg-gray-300 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
          initial={{ width: 0 }}
          animate={controls}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
};

export const About = () => {
  const languageSkills = [
    { name: 'Urdu', level: 100 },
    { name: 'English', level: 95 },
    { name: 'Arabic', level: 80 },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 bg-grey"
      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          About Me
        </h2>

        <div className="rounded-xl p-8 border hover:-translate-y-1 border-blue-500/50 transition-all bg-grey">
          <p className="text-gray-700 mb-6">
            Assalamu Alaikum, I’m Syed Huzafa Tassawer.
            A passionate digital marketing specialist with a unique blend of Islamic academic background and modern media expertise. I help organizations – especially Islamic institutes and non-profits – build a strong online presence through effective content, strategic marketing, and professional design.
            With experience in managing social media, ad campaigns, branding, video editing, and website support, I aim to deliver work that is impactful, meaningful, and value-driven.
          </p>
        </div>

        {/* Right Column: Language Skills */}
        <div className="p-6 rounded-xl border hover:-translate-y-1 border-blue-500/50 transition-all bg-grey mt-8">
          <h3 className="text-xl font-bold mb-4 text-black">Language Skills</h3>
          {languageSkills.map((lang, index) => (
            <LanguageBar key={index} name={lang.name} level={lang.level} />
          ))}
        </div>
      </div>
    </section>
  );
};
