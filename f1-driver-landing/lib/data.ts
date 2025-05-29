import driverData from "@/data/driver-data.json"

export interface Driver {
  name: string
  team: string
  number: number
  currentPosition: number
  totalPoints: number
  podiums: number
  profileImage: string
}

export interface Race {
  id: number
  round: number
  name: string
  circuit: string
  date: string
  time?: string
  country?: string
  countryCode?: string
  circuitImage: string
  position?: number
  points?: number
  gridPosition?: number
  fastestLap?: boolean
  positionChange?: number
}

export interface NextRace {
  name: string
  circuit: string
  date: string
  location: string
  countryCode: string
  circuitImage: string
}

export interface LastRace {
  name: string
  circuit: string
  date: string
  position: number
  time: string
  points: number
  fastestLap: boolean
  gridPosition: number
  positionChange: number
  circuitImage: string
}

export interface NewsItem {
  id: number
  title: string
  excerpt: string
  date: string
  image: string
}

export interface DriverData {
  driver: Driver
  nextRace: NextRace
  lastRace: LastRace
  upcomingRaces: Race[]
  pastRaces: Race[]
  news: NewsItem[]
}

export function getDriverData(): DriverData {
  return driverData as DriverData
}

export function getDriver(): Driver {
  return driverData.driver as Driver
}

export function getNextRace(): NextRace {
  return driverData.nextRace as NextRace
}

export function getLastRace(): LastRace {
  return driverData.lastRace as LastRace
}

export function getUpcomingRaces(): Race[] {
  return driverData.upcomingRaces as Race[]
}

export function getPastRaces(): Race[] {
  return driverData.pastRaces as Race[]
}

export function getNews(): NewsItem[] {
  return driverData.news as NewsItem[]
}
