import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8">
      <div className="container mx-auto flex flex-col gap-8 px-6 text-slate-600 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-1">
          <p className="font-semibold text-slate-900">The Branding Hub</p>
          <p>Trusted digital marketing for modern brands.</p>
        </div>
        <div className="grid gap-4 text-sm sm:text-right">
          <div>
            <p className="font-semibold text-slate-900">Founder</p>
            <p>Vishal Verma</p>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Co-Founder</p>
            <p>Abu Talib</p>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Team Members</p>
            <p>AK Alam</p>
            <p>Rahul</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <span>© {new Date().getFullYear()}</span>
            <a className="transition hover:text-slate-900" href="#">Privacy</a>
            <a className="transition hover:text-slate-900" href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
