import { Countdown } from "@/components/countdown"
import { LastResult } from "@/components/last-result"
import { RaceList } from "@/components/race-list"
import { NewsFeed } from "@/components/news-feed"
import { HeroSection } from "@/components/hero-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      <HeroSection />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <div className="lg:col-span-2">
            <LastResult />
          </div>
          <div className="bg-slate-900 rounded-xl p-6 shadow-lg border border-pink-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">Next Race</h2>
            <Countdown />
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <span className="bg-gradient-to-r from-pink-500 to-blue-500 h-8 w-2 mr-4 rounded-full"></span>
            Race Schedule & Results
          </h2>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <RaceList type="upcoming" />
            <RaceList type="past" />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <span className="bg-gradient-to-r from-pink-500 to-blue-500 h-8 w-2 mr-4 rounded-full"></span>
            Latest News
          </h2>
          <NewsFeed />
        </section>
      </main>
    </div>
  )
}
