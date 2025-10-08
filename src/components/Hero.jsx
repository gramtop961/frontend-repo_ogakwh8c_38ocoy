import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/6u1YIdx9y5q-1n82/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-4 pb-14 sm:px-6 lg:px-8">
        <div className="w-full rounded-2xl border border-white/40 bg-white/70 p-6 shadow-xl backdrop-blur supports-[backdrop-filter]:bg-white/60 sm:p-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Welcome to South Park
          </h1>
          <p className="mt-3 max-w-2xl text-slate-700 sm:text-lg">
            A tiny mountain town with big stories, quirky neighbors, and more adventures than you can shake a winter hat at.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#town" className="rounded-full bg-slate-900 px-5 py-2 text-white shadow hover:bg-slate-800">Explore the Town</a>
            <a href="#highlights" className="rounded-full border border-slate-300 bg-white px-5 py-2 text-slate-900 hover:border-slate-400">See Highlights</a>
          </div>
        </div>
      </div>
    </section>
  );
}
