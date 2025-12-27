import { XCircle } from 'lucide-react';

export default function WhatWeDontDo() {
  const exclusions = [
    'Large-scale enterprise programs',
    'Core banking or ERP migrations',
    'Projects requiring large (20+) teams',
    'Multi-year or mission-critical systems',
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
          What We Don't Do
        </h2>

        <div className="bg-white border border-gray-200 p-8">
          <p className="text-gray-600 mb-6 leading-relaxed">
            To ensure the best fit and maintain quality, we are transparent about the types of projects we do not undertake:
          </p>

          <div className="space-y-3">
            {exclusions.map((exclusion, index) => (
              <div key={index} className="flex items-start space-x-3">
                <XCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">{exclusion}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
