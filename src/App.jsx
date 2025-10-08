import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TownShowcase from './components/TownShowcase';
import Highlights from './components/Highlights';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-white font-[Inter] text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <TownShowcase />
        <Highlights />
      </main>
      <Footer />
    </div>
  );
}
