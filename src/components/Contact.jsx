import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="container mx-auto px-4 py-16 sm:px-6 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[2rem] bg-white p-6 shadow-2xl sm:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-amber-600">Let’s collaborate</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900">Ready to launch your next campaign?</h2>
          <p className="mt-4 text-slate-600">
            Share a few details and our strategy team will recommend the perfect social plan for your business.
          </p>
          <form className="mt-8 space-y-5" onSubmit={(e) => { e.preventDefault(); alert('Thanks! We will contact you shortly.') }}>
            <label className="block text-sm font-medium text-slate-700">Name</label>
            <input className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-3 text-slate-900 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100" placeholder="Your name" />

            <label className="block text-sm font-medium text-slate-700">Email</label>
            <input className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-3 text-slate-900 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100" placeholder="you@example.com" />

            <label className="block text-sm font-medium text-slate-700">Message</label>
            <textarea className="min-h-[140px] w-full rounded-3xl border border-slate-200 bg-slate-50 p-5 text-slate-900 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100" placeholder="Tell us about your goals" />

            <button className="inline-flex w-full justify-center rounded-full bg-amber-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-amber-300/30 transition hover:bg-amber-600 sm:w-auto" type="submit">
              Send Message
            </button>
          </form>
        </div>

        <div className="space-y-8 rounded-[2rem] bg-slate-950 p-10 text-white shadow-2xl">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-amber-300">Contact details</p>
            <h3 className="mt-4 text-2xl font-semibold">The Branding Hub</h3>
          </div>
          <div className="space-y-3 text-slate-300">
            <p><span className="font-semibold text-white">Phone:</span> 8400406751</p>
            <p><span className="font-semibold text-white">Alt Phone:</span> 95328 39188</p>
            <p><span className="font-semibold text-white">Email:</span> thebrandinghub.in@gmail.com</p>
            <p><span className="font-semibold text-white">Address:</span> Near Roadways, Basti, U.P. 272001</p>
          </div>
          <div className="rounded-3xl bg-slate-900 p-6">
            <p className="text-sm uppercase tracking-[0.35em] text-amber-400">Social profiles</p>
            <div className="mt-4 flex flex-col gap-3 text-slate-200">
              <a className="transition hover:text-amber-300" href="https://www.instagram.com/thebrandinghub.in/" target="_blank" rel="noreferrer">Instagram</a>
              <a className="transition hover:text-amber-300" href="#">YouTube</a>
              <a className="transition hover:text-amber-300" href="#">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
