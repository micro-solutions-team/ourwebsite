export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          Micro-Solutions Delivery Team
        </h1>

        <p className="text-xl sm:text-2xl text-gray-300 mb-8 font-light">
          Fast, reliable delivery of small-to-medium software solutions for enterprise environments.
        </p>

        <p className="text-base sm:text-lg text-gray-400 mb-10 leading-relaxed max-w-3xl mx-auto">
          We are a small, flexible technical team with experience in corporate environments, specializing in the rapid delivery of micro-solutions. We focus on work that large vendors often delay or deprioritize, providing full delivery from analysis to documentation.
        </p>

        <button
          onClick={scrollToContact}
          className="bg-white text-gray-900 px-8 py-3 text-lg font-medium hover:bg-gray-100 transition-colors"
        >
          Contact
        </button>
      </div>
    </section>
  );
}
