import { Users, Target, Shield, Zap } from 'lucide-react';

export default function WhoWeAre() {
  const features = [
    {
      icon: Users,
      title: 'Small, Senior Team',
      description: 'Delivery-focused technical experts with extensive enterprise experience',
    },
    {
      icon: Target,
      title: 'Full Delivery Ownership',
      description: 'Complete lifecycle coverage: analysis, development, testing, and documentation',
    },
    {
      icon: Shield,
      title: 'High Accountability',
      description: 'Low overhead structure with direct responsibility for outcomes',
    },
    {
      icon: Zap,
      title: 'Corporate Experience',
      description: 'Deep understanding of enterprise environments and constraints',
    },
  ];

  return (
    <section id="who-we-are" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
          Who We Are
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white p-6 border border-gray-200">
              <feature.icon className="w-10 h-10 text-gray-900 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
