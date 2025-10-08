import React from 'react';
import { Sparkles, Video, MessageSquare } from 'lucide-react';

const Card = ({ icon: Icon, title, children }) => (
  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
    <div className="flex items-center gap-3">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-sky-500 to-emerald-500 text-white shadow-md">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
    </div>
    <p className="mt-3 text-slate-600">{children}</p>
  </div>
);

export default function Highlights() {
  return (
    <section id="highlights" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <Card icon={Sparkles} title="Local Legends">
              Tall tales travel fast in these parts. Some are true, others are just fun to retell by the fire.
            </Card>
            <Card icon={Video} title="Cartoony Charm">
              The flat cut-out style may be simple, but the laughs are layered. Expect the unexpected.
            </Card>
            <Card icon={MessageSquare} title="Town Gossip">
              From schoolyard rumors to mayoral mishaps, there’s always something to chat about.
            </Card>
          </div>
          <aside className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
            <h3 className="text-lg font-semibold text-emerald-900">Did you know?</h3>
            <p className="mt-2 text-emerald-800">
              At 7,000 feet above sea level, cocoa tastes better and jokes land harder. That’s science.
            </p>
            <a href="#contact" className="mt-4 inline-block rounded-full bg-emerald-600 px-4 py-2 text-white shadow hover:bg-emerald-700">
              Say Hello
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
