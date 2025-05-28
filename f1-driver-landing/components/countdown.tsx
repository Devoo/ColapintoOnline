"use client"

import { useEffect, useState } from "react"
import { Clock, MapPin } from "lucide-react"

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // Example next race date - replace with actual next race date
  const nextRaceDate = new Date("2025-06-15T14:00:00Z")
  const nextRaceLocation = "Monaco Grand Prix"
  const nextRaceCircuit = "Circuit de Monaco"

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const difference = nextRaceDate.getTime() - now.getTime()

      if (difference <= 0) {
        clearInterval(timer)
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-2 mb-4 text-gray-300">
        <MapPin className="h-5 w-5 text-pink-500" />
        <span>{nextRaceLocation}</span>
      </div>
      <p className="text-sm text-gray-400 mb-6">{nextRaceCircuit}</p>

      <div className="grid grid-cols-4 gap-2 mb-6">
        <div className="bg-slate-800 rounded-lg p-3">
          <div className="text-3xl font-bold text-white">{timeLeft.days}</div>
          <div className="text-xs text-gray-400">DAYS</div>
        </div>
        <div className="bg-slate-800 rounded-lg p-3">
          <div className="text-3xl font-bold text-white">{timeLeft.hours}</div>
          <div className="text-xs text-gray-400">HOURS</div>
        </div>
        <div className="bg-slate-800 rounded-lg p-3">
          <div className="text-3xl font-bold text-white">{timeLeft.minutes}</div>
          <div className="text-xs text-gray-400">MINS</div>
        </div>
        <div className="bg-slate-800 rounded-lg p-3">
          <div className="text-3xl font-bold text-white">{timeLeft.seconds}</div>
          <div className="text-xs text-gray-400">SECS</div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 text-gray-300">
        <Clock className="h-5 w-5 text-pink-500" />
        <span>
          {nextRaceDate.toLocaleDateString()} - {nextRaceDate.toLocaleTimeString()}
        </span>
      </div>
    </div>
  )
}
