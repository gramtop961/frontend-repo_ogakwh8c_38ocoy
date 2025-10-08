import React from 'react';
import { MapPin, Mountain, Trees } from 'lucide-react';

const Feature = ({ icon: Icon, title, children }) => (
  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
    <div className="flex items-center gap-3">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-emerald-500 to-sky-500 text-white shadow-md">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
    </div>
    <p className="mt-3 text-slate-600">{children}</p>
  </div>
);

export default function TownShowcase() {
  return (
    <section id="town" className="relative z-10 -mt-8 bg-gradient-to-b from-white via-white to-emerald-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">The Town</h2>
          <p className="mt-2 text-slate-600">Nestled in the Colorado Rockies, South Park is equal parts cozy and chaotic.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Feature icon={MapPin} title="Main Street">
            Grab a cup of cocoa and say hi to the locals. Rumor has it, something weird happens every Tuesday.
          </Feature>
          <Feature icon={Mountain} title="Rocky Peaks">
            Snow-capped serenity with postcard views. Dress warm and watch for the occasional musical number.
          </Feature>
          <Feature icon={Trees} title="Evergreen Trails">
            Wander under towering pines and find hidden paths to your next adventure.
          </Feature>
        </div>
      </div>
    </section>
  );
}
