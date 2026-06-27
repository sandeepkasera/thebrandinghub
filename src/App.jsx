import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import ReelCard from './components/ReelCard'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

const reels = [
  {
    id: 1,
    title: 'Brand Story Reels',
    description: 'Immersive Instagram reels with premium storytelling.',
    cover: '/images/reel-cover-1.jpeg',
    url: 'https://www.instagram.com/reel/DYo4dwdORnA/?igsh=MTU3dWkyYzM5NTdiNA=='
  },
  {
    id: 2,
    title: 'Lead Gen Highlight',
    description: 'Creative short-form content built for conversions.',
    cover: '/images/reel-cover-2.jpeg',
    url: 'https://www.instagram.com/reel/DZuhw2luj_N/?igsh=MXVucG96cjA0OG90YQ=='
  }
]

export default function App() {

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <Banner />

      <section id="reels" className="container mx-auto px-6 py-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-amber-700">Featured Content</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
              Instagram Reels that boost engagement and brand recall
            </h2>
          </div>
          <p className="max-w-xl text-slate-600">
            Click any reel card to preview a showcase video and learn how our service packages help your business stand out.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {reels.map((reel) => (
            <ReelCard key={reel.id} reel={reel} />
          ))}
        </div>
      </section>

      <Services />

      <Contact />

      <Footer />

    </div>
  )
}
