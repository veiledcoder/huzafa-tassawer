import React from 'react';

export const WorkExperience = () => {
  const experiences = [
    {
      title: 'Team Aafia Official (2 Years – Core Media Team)',
      points: [
        'Managed social media content & ad campaigns',
        'Collaborated with the team as a trainer and content planner',
        'Produced visuals and coordinated messaging with the media head',
      ],
    },
    {
      title: 'Jamat-e-Islami Kashmir – Rawalpindi District',
      points: [
        'Serving as Social Media Incharge',
        'Managing the district’s Facebook presence and campaign planning',
        'Designed and scheduled content aligned with Jamat’s Islamic outreach',
      ],
    },
    
    {
      title: 'Zaid Bin Thabit Institute for Arabic Language (ZBTI)',
      points: [
        'Helped build their website and digital presence',
        'Set up YouTube, Facebook, Instagram & TikTok channels',
        'Ran campaigns, created videos and designed posts',
      ],
    },
    {
        title: 'Argo-Housing Project',
        points: [
          'Worked as Social Media Head for a few months',
          'Ran Facebook page, designed promotional graphics',
          'Handled paid ads to generate leads',
        ],
      }
  ];

  return (
    <section
      id="work"
      className="min-h-screen py-20 px-4 bg-grey"
      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Work Experience
        </h2>

        <div className="p-6 sm:p-8 rounded-xl border border-blue-500/50 bg-grey hover:-translate-y-1 transition-all">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 last:mb-0">
              <h3 className="text-lg sm:text-xl font-bold text-black mb-2">{exp.title}</h3>
              <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-1">
                {exp.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
