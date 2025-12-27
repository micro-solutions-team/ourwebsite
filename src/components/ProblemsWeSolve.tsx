import { AlertCircle, Database, Workflow, Brain, Clock } from 'lucide-react';

export default function ProblemsWeSolve() {
  const problems = [
    {
      icon: Clock,
      text: 'Delays in small but critical tasks due to vendor overload',
    },
    {
      icon: Database,
      text: 'Legacy technologies (especially PL/SQL) that block modern integrations',
    },
    {
      icon: Workflow,
      text: 'Lack of teams for small automations and data pipelines',
    },
    {
      icon: Brain,
      text: 'Difficulty starting AI-based initiatives in large organizations',
    },
    {
      icon: AlertCircle,
      text: 'Need for fast, clean deliverables with minimal management overhead',
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
          Problems We Solve
        </h2>

        <div className="space-y-4">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-4 border border-gray-300 bg-white"
            >
              <problem.icon className="w-6 h-6 text-gray-900 flex-shrink-0 mt-1" />
              <p className="text-gray-700 leading-relaxed">{problem.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
