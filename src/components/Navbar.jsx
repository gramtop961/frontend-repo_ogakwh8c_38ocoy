import { MapPin } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/40 border-b border-white/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="p-2 rounded-lg bg-yellow-300 shadow-[0_4px_0_#000] group-hover:translate-y-[1px] transition-transform">
              <MapPin className="w-5 h-5 text-black" />
            </div>
            <span className="text-xl font-extrabold tracking-wide uppercase text-black drop-shadow-[0_2px_0_#fff]">
              Southpark Landing
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="font-semibold text-black/80 hover:text-black transition">About</a>
            <a href="#town" className="font-semibold text-black/80 hover:text-black transition">The Town</a>
            <a href="#highlights" className="font-semibold text-black/80 hover:text-black transition">Highlights</a>
            <a href="#contact" className="font-semibold text-black/80 hover:text-black transition">Contact</a>
          </nav>

          <a
            href="#explore"
            className="inline-flex items-center gap-2 rounded-xl bg-black text-yellow-300 px-4 py-2 font-bold shadow-[0_4px_0_#00000080] hover:translate-y-[1px] active:translate-y-[2px] transition"
          >
            Enter Town
          </a>
        </div>
      </div>
    </header>
  );
}
