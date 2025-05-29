import { CalendarDays, Trophy, Clock, MapPin, Flag } from "lucide-react"
import Image from "next/image"
import { getUpcomingRaces, getPastRaces } from "@/lib/data"

interface RaceListProps {
  type: "upcoming" | "past"
}

export function RaceList({ type }: RaceListProps) {
  const upcomingRaces = getUpcomingRaces()
  const pastRaces = getPastRaces()

  if (type === "upcoming") {
    return (
      <div className="bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-blue-500/20">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 py-4 px-6">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Flag className="h-5 w-5" />
            Upcoming Races
          </h3>
        </div>

        <div className="divide-y divide-slate-800">
          {upcomingRaces.map((race, index) => (
            <div key={race.id} className="p-6 hover:bg-slate-800/50 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative h-16 w-24 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={race.circuitImage || "/placeholder.svg"}
                    alt={race.circuit}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-500/20 rounded-full w-12 h-12 flex items-center justify-center border border-blue-500/30">
                      <span className="text-blue-400 font-bold">{race.round}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">{race.name}</h4>
                      <div className="flex items-center gap-2 text-gray-400">
                        <MapPin className="h-4 w-4" />
                        <span>{race.circuit}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-white mb-1">
                      <CalendarDays className="h-4 w-4 text-blue-500" />
                      <span className="font-semibold">{race.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Clock className="h-4 w-4 text-blue-500" />
                      <span>{race.time}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-gray-300">{race.country}</span>
                  <div className="w-6 h-4 bg-gray-700 rounded-sm"></div>
                </div>
                {index === 0 && (
                  <div className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-semibold">NEXT RACE</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-pink-500/20">
      <div className="bg-gradient-to-r from-pink-600 to-rose-600 py-4 px-6">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <Trophy className="h-5 w-5" />
          Race Results
        </h3>
      </div>

      <div className="divide-y divide-slate-800">
        {pastRaces.map((race) => (
          <div key={race.id} className="p-6 hover:bg-slate-800/50 transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <div className="relative h-16 w-24 rounded-lg overflow-hidden flex-shrink-0">
                <Image src={race.circuitImage || "/placeholder.svg"} alt={race.circuit} fill className="object-cover" />
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-4">
                  <div className="bg-pink-500/20 rounded-full w-12 h-12 flex items-center justify-center border border-pink-500/30">
                    <span className="text-pink-400 font-bold">{race.round}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">{race.name}</h4>
                    <div className="flex items-center gap-2 text-gray-400">
                      <MapPin className="h-4 w-4" />
                      <span>{race.circuit}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 text-white mb-1">
                    <CalendarDays className="h-4 w-4 text-pink-500" />
                    <span className="font-semibold">{race.date}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 bg-slate-800 rounded-lg p-4">
              <div className="text-center">
                <p className="text-gray-400 text-sm mb-1">FINISH</p>
                <div className="flex items-center justify-center gap-2">
                  <Trophy
                    className={`h-5 w-5 ${
                      race.position === 1
                        ? "text-yellow-400"
                        : race.position === 2
                          ? "text-gray-300"
                          : race.position === 3
                            ? "text-amber-700"
                            : "text-gray-500"
                    }`}
                  />
                  <span className="text-white text-xl font-bold">P{race.position}</span>
                </div>
              </div>
              <div className="text-center">
                <p className="text-gray-400 text-sm mb-1">GRID</p>
                <p className="text-white text-xl font-bold">P{race.gridPosition}</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400 text-sm mb-1">POINTS</p>
                <p className="text-white text-xl font-bold">+{race.points}</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400 text-sm mb-1">FASTEST LAP</p>
                {race.fastestLap ? (
                  <div className="bg-purple-600 text-white text-xs px-2 py-1 rounded font-semibold">YES</div>
                ) : (
                  <span className="text-gray-500 text-sm">-</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
