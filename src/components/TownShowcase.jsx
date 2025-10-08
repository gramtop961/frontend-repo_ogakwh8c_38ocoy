import { Mountain, Snowflake, Trees } from 'lucide-react';

const features = [
  {
    icon: Mountain,
    title: 'Snowy Peaks',
    desc: 'Crisp air, higher altitudes, and the occasional alien sighting. Dress warm. Or don\'t.'
  },
  {
    icon: Trees,
    title: 'Quaint Streets',
    desc: 'Colorful houses, cardboard cutout charm, and plenty of gossip by the bus stop.'
  },
  {
    icon: Snowflake,
    title: 'Endless Winters',
    desc: 'Winter is practically a personality trait here. Snowball fights are a contact sport.'
  }
];

export default function TownShowcase() {
  return (
    <section id="town" className="relative py-20 bg-gradient-to-b from-[#a2d9ff] to-[#e6f6ff]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-black drop-shadow-[0_2px_0_#fff]">The Town</h2>
        <p className="mt-2 text-black/70 max-w-2xl">
          Nestled in the Rockies, South Park is equal parts chaos and charm. Here are a few things you might stumble into.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl bg-white shadow-[0_6px_0_#000] border border-black/10 p-6 transition transform hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-yellow-300 flex items-center justify-center shadow-[0_4px_0_#000]">
                <f.icon className="w-6 h-6 text-black" />
              </div>
              <h3 className="mt-4 text-xl font-extrabold text-black">{f.title}</h3>
              <p className="mt-2 text-black/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
