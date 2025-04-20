export const Projects = () => {
  const projects = [
    {
      title: 'Team Aafia Facebook Campaigns',
      description:
        'Custom banners, reels, organic & paid reach improvements',
    },
    {
      title: 'ZBTI Website Launch',
      description:
        'Supported web layout design, setup of media platforms, and lead gen via Facebook ads',
    },
    {
      title: 'Political Awareness Campaigns',
      description:
        'Designed visuals and managed online messaging for Islamic events and statements',
    },
    {
      title: 'Real Estate Promotion (Argo)',
      description:
        'Created paid ad campaigns, event posters, and video marketing visuals for online property traffic',
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 rounded-xl transition-all duration-300  bg-gradient-to-r from-blue-500 to-cyan-400 text-white"
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
