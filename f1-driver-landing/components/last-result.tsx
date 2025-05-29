import { Trophy, Clock, Flag } from "lucide-react"
import Image from "next/image"
import { getLastRace } from "@/lib/data"

export function LastResult() {
  const lastRace = getLastRace()

  return (
    <div className="bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-pink-500/20">
      <div className="bg-gradient-to-r from-pink-600 to-blue-600 py-4 px-6">
        <h2 className="text-2xl font-bold text-white">Last Race Result</h2>
        <p className="text-white/80">
          {lastRace.name} • {lastRace.date}
        </p>
      </div>

      <div className="p-6">
        <div className="relative h-32 w-full mb-6 rounded-lg overflow-hidden">
          <Image
            src={lastRace.circuitImage || "/placeholder.svg"}
            alt={lastRace.circuit}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
          <div className="absolute bottom-2 left-2 text-white font-semibold">{lastRace.circuit}</div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="text-[120px] font-black text-pink-500/20 leading-none">P{lastRace.position}</div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-5xl font-bold text-white">P{lastRace.position}</div>
              </div>
              {lastRace.position <= 3 && (
                <div className="absolute -top-4 -right-4">
                  <Trophy
                    className={`h-12 w-12 ${
                      lastRace.position === 1
                        ? "text-yellow-400"
                        : lastRace.position === 2
                          ? "text-gray-300"
                          : "text-amber-700"
                    }`}
                  />
                </div>
              )}
            </div>
          </div>

          <div className="flex-1">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-400 text-sm">STARTED</p>
                <p className="text-white text-xl font-semibold">P{lastRace.gridPosition}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">POINTS</p>
                <p className="text-white text-xl font-semibold">+{lastRace.points}</p>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-pink-500" />
                <p className="text-white">{lastRace.time}</p>
              </div>
              <div>
                <p
                  className={`text-sm ${lastRace.positionChange > 0 ? "text-green-500" : lastRace.positionChange < 0 ? "text-red-500" : "text-gray-400"}`}
                >
                  {lastRace.positionChange > 0 ? `+${lastRace.positionChange}` : lastRace.positionChange}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-800 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Flag className="h-5 w-5 text-pink-500" />
              <span className="text-white">{lastRace.circuit}</span>
            </div>
            {lastRace.fastestLap && (
              <div className="bg-purple-600 text-white text-xs px-2 py-1 rounded">FASTEST LAP</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
