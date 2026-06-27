import React from 'react'

export default function Banner() {
  return (
    <section id="top" className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(255,214,75,0.25),_transparent_45%),linear-gradient(180deg,_rgb(248,250,252),_rgb(255,255,255))] py-20">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <p className="inline-flex rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
              Digital Marketing Services
            </p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
              Growth-focused campaigns, stunning reels, and premium brand strategy.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              We help ambitious brands cut through the noise with social-first storytelling, ads that convert, and analytics that prove return on investment.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="inline-flex items-center rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-amber-300/30 transition hover:bg-amber-600">
                Book a Strategy Call
              </a>
              <a href="#services" className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400">
                Explore Services
              </a>
            </div>
          </div>

          <div className="space-y-6 rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-2xl backdrop-blur-xl">
            <div className="rounded-3xl bg-slate-950 p-6 text-white shadow-inner">
              <p className="text-sm uppercase tracking-[0.3em] text-amber-300">Brand Impact</p>
              <h2 className="mt-4 text-3xl font-bold">+82% audience growth</h2>
              <p className="mt-3 text-slate-300">Tailored content planning and paid amplification for consistent engagement.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-100 p-5">
                <p className="text-sm uppercase tracking-[0.25em] text-amber-700">Creative</p>
                <p className="mt-3 text-slate-700">Reels, shorts, and visual content that feels premium.</p>
              </div>
              <div className="rounded-3xl bg-slate-100 p-5">
                <p className="text-sm uppercase tracking-[0.25em] text-amber-700">Strategy</p>
                <p className="mt-3 text-slate-700">Data-led social strategy built for scaling and community growth.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
