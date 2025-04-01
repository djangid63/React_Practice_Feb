import React from 'react'
import { useSelector } from 'react-redux'

const Explore = () => {
  const isDark = useSelector((state) => state.Mode.isDark)

  const genres = [
    { id: 1, name: "Pop", color: "from-pink-400/70 to-pink-500/70", popular: "Shape of You" },
    { id: 2, name: "Rock", color: "from-red-400/70 to-red-500/70", popular: "Bohemian Rhapsody" },
    { id: 3, name: "Hip Hop", color: "from-blue-400/70 to-blue-500/70", popular: "Lose Yourself" },
    { id: 4, name: "Electronic", color: "from-purple-400/70 to-purple-500/70", popular: "Strobe" },
    { id: 5, name: "Jazz", color: "from-amber-400/70 to-amber-500/70", popular: "Take Five" },
    { id: 6, name: "Classical", color: "from-emerald-400/70 to-emerald-500/70", popular: "Für Elise" },
    { id: 7, name: "R&B", color: "from-indigo-400/70 to-indigo-500/70", popular: "Blinding Lights" },
    { id: 8, name: "Country", color: "from-orange-400/70 to-orange-500/70", popular: "Jolene" },
  ];

  return (
    <div className={`p-6 ${isDark ? 'bg-gradient-to-br from-gray-900 to-purple-900 text-gray-200' : 'bg-gradient-to-br from-blue-50 to-purple-50 text-gray-800'} h-[100%] animate-fadeIn`}>
      <h2 className={`text-3xl font-bold mb-6 text-transparent bg-clip-text ${isDark ? 'bg-gradient-to-r from-blue-400 to-purple-400' : 'bg-gradient-to-r from-indigo-600 to-purple-700'} animate-slideDown`}>
        Explore
      </h2>
      <p className={`mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Discover new music by genre</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-20">
        {genres.map((genre, index) => (
          <div
            key={genre.id}
            className={`p-6 rounded-xl bg-gradient-to-br ${genre.color} ${isDark
              ? 'backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/70'
              : 'backdrop-blur-sm border border-gray-200/70 hover:border-purple-300/70'
              } cursor-pointer transition-all duration-300 shadow-sm hover:scale-[1.02] ${isDark ? 'hover:shadow-purple-500/20' : 'hover:shadow-purple-300/20'} animate-fadeInUp`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <h3 className="text-xl font-bold text-white mb-2 text-shadow">{genre.name}</h3>
            <div className="flex flex-col space-y-1">
              <p className="text-white/90">Popular: {genre.popular}</p>
              <p className="text-white/80 text-sm">Browse all {genre.name} songs</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Explore