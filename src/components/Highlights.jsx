import { Sparkles, Video, MessageSquare } from 'lucide-react';

const highlights = [
  {
    icon: Sparkles,
    title: 'Satire Central',
    desc: 'Where current events get roasted over a campfire of sarcasm.'
  },
  {
    icon: Video,
    title: 'Paper-Cut Aesthetic',
    desc: 'A DIY animation look that became a cultural icon.'
  },
  {
    icon: MessageSquare,
    title: 'Quips & Quotes',
    desc: 'Lines you\'ll repeat forever, sometimes at inappropriate times.'
  }
];

export default function Highlights() {
  return (
    <section id="highlights" className="relative py-20 bg-[#fef9c3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-10">
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-black drop-shadow-[0_2px_0_#fff]">Highlights</h2>
            <p className="mt-2 text-black/70 max-w-2xl">
              A quick tour through what makes this little mountain town such a big deal in pop culture.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((h) => (
                <div key={h.title} className="rounded-2xl bg-white p-6 border border-black/10 shadow-[0_6px_0_#000]">
                  <div className="w-12 h-12 rounded-xl bg-black text-yellow-300 flex items-center justify-center shadow-[0_4px_0_#000]">
                    <h.icon className="w-6 h-6" />
                  </div>
                  <h3 className="mt-3 text-xl font-extrabold text-black">{h.title}</h3>
                  <p className="mt-2 text-black/70">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-[420px] bg-white rounded-2xl border border-black/10 shadow-[0_8px_0_#000] p-6">
            <h3 className="text-xl font-extrabold text-black">Did you know?</h3>
            <ul className="mt-4 space-y-3 list-disc list-inside text-black/80">
              <li>South Park started as a crude cutout animation short.</li>
              <li>Set in a fictional Colorado town with real mountain vibes.</li>
              <li>Known for sharp satire and a fearless sense of humor.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
