import { Search, FileText, TrendingUp, CheckCircle, Package, DollarSign } from 'lucide-react';

export default function HowWeWork() {
  const steps = [
    {
      icon: Search,
      title: 'Joint Requirements Analysis',
      description: 'Collaborative discovery with internal teams to understand needs',
    },
    {
      icon: FileText,
      title: 'Clear Scope Definition',
      description: 'Explicitly defined deliverables and success criteria',
    },
    {
      icon: TrendingUp,
      title: 'Weekly Progress Updates',
      description: 'Regular communication and transparency throughout delivery',
    },
    {
      icon: CheckCircle,
      title: 'Testing & UAT',
      description: 'Comprehensive testing and user acceptance validation',
    },
    {
      icon: Package,
      title: 'Structured Handover',
      description: 'Complete documentation and knowledge transfer',
    },
    {
      icon: DollarSign,
      title: 'Fixed-Price Options',
      description: 'Predictable costs for small, well-defined projects',
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
          How We Work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div key={step.title} className="p-6 border border-gray-700 bg-gray-800">
              <div className="flex items-center mb-3">
                <span className="text-sm font-bold text-gray-500 mr-3">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <step.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
