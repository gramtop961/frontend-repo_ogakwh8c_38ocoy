import React from 'react';
import { Snowflake } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/30 bg-white/70 shadow-lg shadow-emerald-100/40 backdrop-blur supports-[backdrop-filter]:bg-white/60">
          <div className="flex items-center justify-between px-5 py-3 sm:px-6">
            <a href="#home" className="group inline-flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-emerald-500 to-sky-500 text-white shadow-md shadow-emerald-200">
                <Snowflake className="h-5 w-5" />
              </span>
              <span className="text-lg font-semibold tracking-tight text-slate-800 group-hover:text-slate-900">
                South Park
              </span>
            </a>

            <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 sm:flex">
              <a href="#home" className="hover:text-slate-900">Home</a>
              <a href="#town" className="hover:text-slate-900">The Town</a>
              <a href="#contact" className="hover:text-slate-900">Contact</a>
              <a
                href="#town"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-white shadow hover:bg-slate-800"
              >
                Enter Town
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
