import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CoursesCarousel } from './components/CoursesCarousel';
import { PlatformFeatures } from './components/PlatformFeatures';
import { About } from './components/About';
import { LeadForm } from './components/LeadForm';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-100 bg-brand-darker min-h-screen selection:bg-brand-blue selection:text-white">
      <Header />
      <main>
        <Hero />
        <CoursesCarousel />
        <PlatformFeatures />
        <About />
        <LeadForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;