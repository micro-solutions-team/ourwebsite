import Navigation from './components/Navigation';
import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import ProblemsWeSolve from './components/ProblemsWeSolve';
import Services from './components/Services';
import HowWeWork from './components/HowWeWork';
import WhatWeDontDo from './components/WhatWeDontDo';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <WhoWeAre />
        <ProblemsWeSolve />
        <Services />
        <HowWeWork />
        <WhatWeDontDo />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
