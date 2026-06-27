import React from 'react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3 text-slate-900">
          <img src="/images/logo.jpeg" alt="The Branding Hub logo" className="h-12 w-12 rounded-full border-2 border-amber-500 object-cover shadow-md" />
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">The Branding Hub</p>
            <p className="text-base font-semibold text-slate-900">Digital Marketing</p>
          </div>
        </a>

        <nav className="flex items-center gap-6 text-sm text-slate-600">
          <a href="#services" className="transition hover:text-slate-900">Services</a>
          <a href="#reels" className="transition hover:text-slate-900">Reels</a>
          <a href="#contact" className="transition hover:text-slate-900">Contact</a>
        </nav>
      </div>
    </header>
  )
}
