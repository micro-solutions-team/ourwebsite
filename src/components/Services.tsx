import { Code, BarChart3, Bot, Link, Layout } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Code,
      title: 'Custom Micro-Solutions',
      items: [
        'PL/SQL automation and optimization',
        'Data migration scripts',
        'Internal tools (utility scripts, micro-apps)',
        'ETL pipelines and data loaders',
        'Modernization: Refactoring and migration of business logic from PL/SQL to Python or Java to enable APIs, AI pipelines, cloud integration, and long-term maintainability',
      ],
    },
    {
      icon: BarChart3,
      title: 'Dashboards & Analytics',
      items: [
        'Custom dashboards using React / Node',
        'Specialized KPIs and custom data sources',
        'Data aggregation and integration with internal systems',
      ],
    },
    {
      icon: Bot,
      title: 'AI Assistants & Automations',
      items: [
        'Internal LLM assistants',
        'Chatbots for FAQ, support, internal helpdesks',
        'Ticket summarization and document intelligence (RAG pipelines)',
        'Small RPA flows for repetitive tasks',
        'Agentic workflows, LangChain pipelines, AI-driven tooling',
      ],
    },
    {
      icon: Link,
      title: 'Integrations',
      items: [
        'API development and consumption',
        'Connectors between heterogeneous systems',
        'Middleware scripts (format transformations, synchronizations, scheduled jobs)',
        'Integration with existing corporate and legacy environments',
      ],
    },
    {
      icon: Layout,
      title: 'Small-to-Medium Full-Stack Applications',
      items: [
        'Lightweight internal web applications',
        'Frontend: React or Vue',
        'Backend: Node or Python',
        'Admin panels and internal management tools',
      ],
    },
  ];

  return (
    <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
          What We Do
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Focused technical services for enterprise environments
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-gray-50 p-6 border border-gray-300">
              <div className="flex items-center mb-4">
                <service.icon className="w-8 h-8 text-gray-900 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {service.items.map((item, index) => (
                  <li key={index} className="text-gray-700 leading-relaxed pl-4 relative before:content-['•'] before:absolute before:left-0">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
