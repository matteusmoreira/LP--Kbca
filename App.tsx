import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CoursesCarousel } from './components/CoursesCarousel';
import { PlatformFeatures } from './components/PlatformFeatures';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';

function App() {
  return (
    <div className="font-sans text-gray-100 bg-brand-darker min-h-screen selection:bg-brand-blue selection:text-white">
      <Header />
      <main>
        <Hero />
        <CoursesCarousel />
        <PlatformFeatures />
        <About />
      </main>
      <Footer />
      <WhatsAppFloating />
    </div>
  );
}

export default App;