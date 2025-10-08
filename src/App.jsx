import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TownShowcase from './components/TownShowcase';
import Highlights from './components/Highlights';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#b3e5ff] text-black font-['IBM Plex Sans',Inter,system-ui,sans-serif]">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <TownShowcase />
        <Highlights />
      </main>
      <Footer />
    </div>
  );
}

export default App;
