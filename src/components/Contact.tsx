import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
          Contact
        </h2>

        <div className="bg-gray-800 border border-gray-700 p-8 sm:p-12 max-w-full overflow-hidden">
          <Mail className="w-12 h-12 text-white mx-auto mb-6" />

          <a
            href="mailto:microsolutionteam@gmail.com"
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-white hover:text-gray-300 transition-colors break-words"
          >
            microsolutionteam@gmail.com
          </a>

          <p className="text-gray-400 mt-6 leading-relaxed">
            For partnerships, subcontracting, or pilot projects.
          </p>
        </div>
      </div>
    </section>
  );
}
