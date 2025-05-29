import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { getDriver } from "@/lib/data"

export function HeroSection() {
  const driver = getDriver()

  return (
    <section className="relative h-[90vh] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="F1 track background"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950"></div>

      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500">
              {driver.name}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Formula 1 Driver • {driver.team} • #{driver.number}
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-pink-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-pink-500/30">
              <p className="text-sm text-gray-300">CURRENT POSITION</p>
              <p className="text-3xl font-bold text-white">{driver.currentPosition}th</p>
            </div>
            <div className="bg-blue-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-500/30">
              <p className="text-sm text-gray-300">POINTS</p>
              <p className="text-3xl font-bold text-white">{driver.totalPoints}</p>
            </div>
            <div className="bg-slate-800/80 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-700">
              <p className="text-sm text-gray-300">PODIUMS</p>
              <p className="text-3xl font-bold text-white">{driver.podiums}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="h-10 w-10 text-white opacity-70" />
      </div>
    </section>
  )
}
