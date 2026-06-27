import React from 'react'

export default function ReelCard({ reel }) {
  return (
    <a
      href={reel.url}
      target="_blank"
      rel="noreferrer"
      className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
    >
      <div className="relative overflow-hidden bg-slate-900">
        <div className="aspect-[9/16] w-full overflow-hidden">
          <img
            src={reel.cover}
            alt={reel.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent p-5 text-white">
          <p className="text-sm uppercase tracking-[0.25em] text-amber-300">Reel cover</p>
          <h3 className="mt-2 text-xl font-semibold">{reel.title}</h3>
        </div>
      </div>
      <div className="space-y-2 p-6 text-left">
        <p className="text-sm text-slate-500">{reel.description}</p>
        <span className="inline-flex rounded-full bg-amber-100 px-3 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">
          Open on Instagram
        </span>
      </div>
    </a>
  )
}
