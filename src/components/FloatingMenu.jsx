'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { 
  Home, 
  Briefcase, 
  User, 
  Mail, 
  Moon, 
  Sun,
  Github,
  Linkedin,
  ExternalLink
} from 'lucide-react'

export default function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(true)

  const menuItems = [
    { icon: <Home size={18} />, label: 'Home', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { icon: <Briefcase size={18} />, label: 'Projects', action: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) },
    { icon: <User size={18} />, label: 'About', action: () => console.log('About') },
    { icon: <Mail size={18} />, label: 'Contact', action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) },
    { icon: darkMode ? <Sun size={18} /> : <Moon size={18} />, label: 'Theme', action: () => setDarkMode(!darkMode) },
  ]

  const socialItems = [
    { icon: <Github size={18} />, label: 'GitHub', href: 'https://github.com' },
    { icon: <Linkedin size={18} />, label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: <ExternalLink size={18} />, label: 'Portfolio', href: '#' },
  ]

  return (
    <div className="fixed top-6 right-6 z-50">
      {/* Menu Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 glass-effect rounded-2xl flex flex-col items-center justify-center gap-1.5 group"
        aria-label="Menu"
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-1.5 h-1.5 bg-gray-400 rounded-full group-hover:bg-cyan-400"
            animate={isOpen ? 
              { rotate: i === 0 ? 45 : i === 2 ? -45 : 0, y: i === 0 ? 8 : i === 2 ? -8 : 0, opacity: i === 1 ? 0 : 1 } 
              : { rotate: 0, y: 0, opacity: 1 }
            }
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        ))}
      </motion.button>

      {/* Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="absolute top-16 right-0 w-64 glass-effect rounded-2xl p-3 shadow-2xl border border-white/10"
            >
              {/* Navigation Items */}
              <div className="space-y-1 mb-3">
                {menuItems.map((item, idx) => (
                  <motion.button
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => {
                      item.action()
                      setIsOpen(false)
                    }}
                    className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors text-left"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="text-gray-400">
                      {item.icon}
                    </div>
                    <span className="font-medium">{item.label}</span>
                  </motion.button>
                ))}
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-3" />

              {/* Social Links */}
              <div className="space-y-1">
                {socialItems.map((item, idx) => (
                  <motion.a
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (menuItems.length + idx) * 0.05 }}
                    href={item.href}
                    target="_blank"
                    className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <div className="text-gray-400">
                      {item.icon}
                    </div>
                    <span className="font-medium">{item.label}</span>
                  </motion.a>
                ))}
              </div>

              {/* Footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-3 pt-3 border-t border-white/5 text-xs text-gray-500 text-center"
              >
                <p>Tap anywhere outside to close</p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
