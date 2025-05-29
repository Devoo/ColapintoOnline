import Image from "next/image"
import { CalendarDays, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getNews } from "@/lib/data"

export function NewsFeed() {
  const newsItems = getNews()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {newsItems.map((item) => (
        <div
          key={item.id}
          className="bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-slate-800 hover:border-pink-500/30 transition-all group"
        >
          <div className="relative h-48">
            <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-70"></div>
          </div>

          <div className="p-6">
            <div className="flex items-center gap-2 mb-3 text-gray-400 text-sm">
              <CalendarDays className="h-4 w-4 text-pink-500" />
              <span>{item.date}</span>
            </div>

            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-400 transition-colors">
              {item.title}
            </h3>

            <p className="text-gray-300 mb-4 line-clamp-2">{item.excerpt}</p>

            <Button variant="ghost" className="text-pink-500 hover:text-pink-400 hover:bg-pink-500/10 p-0 h-auto">
              Read More <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
