import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="explore" className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/DXbF9O9nWRPNwlwF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#6fb2d2]/60 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-16">
        <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-[0_8px_0_#000] border border-black/10 max-w-xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-black drop-shadow-[0_2px_0_#fff]">
            Welcome to South Park
          </h1>
          <p className="mt-3 text-lg text-black/80">
            A small mountain town with big personalities. Discover snowy peaks, quirky locals, and an unforgettable vibe.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#highlights" className="inline-flex items-center px-5 py-3 rounded-xl bg-yellow-300 text-black font-extrabold shadow-[0_4px_0_#000] hover:translate-y-[1px] transition">See Highlights</a>
            <a href="#town" className="inline-flex items-center px-5 py-3 rounded-xl bg-white text-black font-extrabold border-2 border-black hover:bg-black hover:text-yellow-300 transition">Meet the Town</a>
          </div>
        </div>
      </div>
    </section>
  );
}
