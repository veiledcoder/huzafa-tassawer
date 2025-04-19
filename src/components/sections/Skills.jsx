import {
  CircularProgressbar,
  buildStyles
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useInView } from 'react-intersection-observer';

 const skillsData = [
  { title: 'Digital Marketing', percent: 90 },
  { title: 'Graphic Designing', percent: 85 },
  { title: 'Video Editing', percent: 80 },
  { title: 'Website & Branding Support', percent: 88 },
  { title: 'SEO', percent: 75 },
  { title: 'Content Planning', percent: 82 },
];

const SkillItem = ({ title, percent }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const progressValue = inView ? percent : 0;

  return (
    <div ref={ref} className=" flex flex-col items-center space-y-4 transition-all duration-1000">
      <div className="w-16 h-16 ">
        <CircularProgressbar
          value={progressValue}
          text={`${progressValue}%`}
          styles={buildStyles({
            pathColor: '#3B82F6',
            textColor: '#000000',
            trailColor: '#d1d5db',
          })}
        />
      </div>
      <h3 className="text-sm text-gray-500 ">{title}</h3>
    </div>
  );
};

export const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-grey py-16 lg:px-32  "
      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className=" bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center text-4xl font-bold mb-4">Skills</h2>
        <p className="text-lg mb-12 text-gray-500 pb-12">
          Here's what I’m good at — skills I've developed over time to help clients grow and stand out.
        </p>

        <div className="lg:px-40 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4  gap-y-6">
          {skillsData.map((skill, index) => (
            <SkillItem key={index} title={skill.title} percent={skill.percent} />
          ))}
        </div>
      </div>
    </section>
  );
};


