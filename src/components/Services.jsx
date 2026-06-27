import React from 'react'

const services = [
  'Social Media Strategy Development',
  'Content Creation & Curation (Instagram Reels, YouTube Shorts, Graphic Design, Copywriting)',
  'Social Media Management & Scheduling (Publishing & Community Management)',
  'Paid Social Advertising',
  'Influencer Marketing',
  'Analytics & Performance Reporting',
  'Brand Auditing & Competitive Analysis',
  'Social Listening & Brand Sentiment Tracking',
  'Profile Optimization & Setup (Bio rewriting, Highlights setup, Visual branding)',
  'Hashtag & Keyword Research for Social SEO',
  'Community Building & Group Moderation (e.g., Facebook Groups, Discord)',
  'Crisis Management & PR Monitoring'
]

export default function Services() {
  return (
    <section className="bg-slate-900 py-20 text-white">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-amber-300">Expert offerings</p>
          <h2 className="mt-4 text-4xl font-semibold">Full-service digital marketing for ambitious brands</h2>
          <p className="mt-4 text-slate-300">
            From creative content to performance analytics, every service is built to elevate your presence, engagement, and growth.
          </p>
        </div>

        <div className="mt-12 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-xl transition hover:-translate-y-1 hover:border-amber-300/30">
              <p className="text-sm leading-6 text-slate-100">{service}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
