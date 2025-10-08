export default function Footer() {
  return (
    <footer id="contact" className="relative bg-black text-yellow-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-center md:text-left font-semibold">
            Made with love for a tiny mountain town vibe. Not affiliated with the original creators.
          </p>
          <a
            href="#explore"
            className="inline-flex items-center px-5 py-3 rounded-xl bg-yellow-300 text-black font-extrabold shadow-[0_4px_0_#000] hover:translate-y-[1px] transition"
          >
            Back to Top
          </a>
        </div>
        <p className="mt-8 text-center text-yellow-300/70 text-sm">© {new Date().getFullYear()} Southpark Landing</p>
      </div>
    </footer>
  );
}
