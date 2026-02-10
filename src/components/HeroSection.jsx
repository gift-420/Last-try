'use client'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Cpu } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-8"
        >
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-sm">Innovating Electronics & 3D Design</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          <span className="text-gradient">ELECTRONICS</span>
          <br />
          <span className="text-3xl md:text-5xl lg:text-6xl text-gray-300 mt-4 block">
            Meets <span className="text-cyan-400">Digital Art</span>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-xl text-gray-400 max-w-3xl mx-auto mb-10"
        >
          Crafting immersive 3D experiences and cutting-edge electronics solutions.
          Where technology meets creativity.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 flex items-center gap-2 group">
            View Projects
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="px-8 py-3 glass-effect rounded-full font-semibold hover:bg-white/10 transition-colors flex items-center gap-2">
            <Cpu className="w-5 h-5" />
            Explore Tech
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto"
        >
          {[
            { value: '50+', label: 'Projects' },
            { value: '3D', label: 'Visualization' },
            { value: '100%', label: 'Satisfaction' }
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl font-bold text-gradient">{stat.value}</div>
              <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-1000" />
    </section>
  )
        }
