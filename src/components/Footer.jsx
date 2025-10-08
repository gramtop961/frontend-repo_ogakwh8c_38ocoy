import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 py-12 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm">© {new Date().getFullYear()} South Park Landing. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a href="#home" className="rounded-full bg-white/10 px-4 py-2 text-white backdrop-blur hover:bg-white/20">Back to top</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
