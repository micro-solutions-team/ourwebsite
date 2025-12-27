import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Legacy PL/SQL to Python Modernization',
      description:
        'Demonstration of refactoring legacy PL/SQL business rules into a Python-based, API-ready service with explainable decision logic.',
      link: 'https://github.com/micro-solutions-team/legacy-plsql-to-python-demo',
    },
    {
      title: 'Micro Middleware Sync',
      description:
        'Lightweight data synchronization service transforming legacy data silos into modern API-based integrations.',
      link: 'https://github.com/micro-solutions-team/micro-middleware-sync',
    },
    {
      title: 'Micro AI Assistant',
      description:
        'Corporate-grade RAG dashboard for internal document intelligence using LLMs and modern data stores.',
      link: 'https://github.com/micro-solutions-team/micro-ai-assistant',
    },
    {
      title: 'OpsFlow – Internal Ticketing System',
      description:
        'Full-stack internal ticketing system for employee requests, built with Spring Boot and React.',
      link: 'https://github.com/micro-solutions-team/opsflow_project',
    },
  ];

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
          Representative Work
        </h2>

        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto leading-relaxed">
          The following projects are representative, non-production examples demonstrating our delivery approach and technical capabilities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="border border-gray-200 bg-gray-50 p-6 hover:border-gray-400 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <Github className="w-6 h-6 text-gray-900 flex-shrink-0" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {project.title}
              </h3>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-gray-900 font-medium hover:text-gray-700"
              >
                View on GitHub
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
