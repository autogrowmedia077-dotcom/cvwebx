"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

const DUMMY_PURCHASES = [
  { name: "Arjun P.", location: "Bangalore", style: "Mobile App Resume" },
  { name: "Sarah M.", location: "Mumbai", style: "Animated Scroll Resume" },
  { name: "Priya S.", location: "Delhi", style: "Interactive Portfolio" },
  { name: "Vikram K.", location: "Pune", style: "Neo-Futuristic Resume" },
  { name: "Ananya R.", location: "Hyderabad", style: "Professional Minimal" },
  { name: "Rohit G.", location: "Chennai", style: "Mobile App Resume" },
  { name: "Neha V.", location: "Gurgaon", style: "Animated Scroll Resume" },
  { name: "Amit J.", location: "Kolkata", style: "Mobile App Web Resume" }
]



export default function PurchaseNotification() {
  const [currentNotification, setCurrentNotification] = useState<(typeof DUMMY_PURCHASES)[0] | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const showNotification = () => {
      const randomPurchase = DUMMY_PURCHASES[Math.floor(Math.random() * DUMMY_PURCHASES.length)]
      setCurrentNotification(randomPurchase)
      setIsVisible(true)

      // Auto hide after 4 seconds
      const hideTimer = setTimeout(() => {
        setIsVisible(false)
      }, 4000)

      return hideTimer
    }

    // Show first notification after 2 seconds
    const initialTimer = setTimeout(showNotification, 2000)

    // Then show notifications every 8-10 seconds
    const intervals: NodeJS.Timeout[] = []
    const scheduleNextNotification = () => {
      const delay = Math.random() * 2000 + 8000 // 8-10 seconds
      const timer = setTimeout(() => {
        showNotification()
        scheduleNextNotification()
      }, delay)
      intervals.push(timer)
    }

    scheduleNextNotification()

    return () => {
      clearTimeout(initialTimer)
      intervals.forEach((timer) => clearTimeout(timer))
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && currentNotification && (
        <motion.div
          initial={{ opacity: 0, y: 20, x: 400 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 20, x: 400 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50"
        >
          <div className="bg-gradient-to-br from-slate-900 to-black border border-cyan-500/30 rounded-lg p-2 w-56 shadow-2xl shadow-cyan-500/20 backdrop-blur-sm">
            {/* Header */}
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">New Purchase</span>
              </div>
              <button onClick={() => setIsVisible(false)} className="text-slate-400 hover:text-white transition-colors">
                <X size={16} />
              </button>
            </div>

            {/* Content */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xs">{currentNotification.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{currentNotification.name}</p>
                  <p className="text-slate-400 text-xs">{currentNotification.location}</p>
                </div>
              </div>

              <div className="bg-slate-800/50 rounded px-2.5 py-1.5 mt-2">
                <p className="text-slate-300 text-xs">
                  just purchased <span className="text-cyan-400 font-semibold">{currentNotification.style}</span>
                </p>
              </div>

              <div className="pt-2">
                <p className="text-cyan-400 font-semibold text-sm">₹499</p>
              </div>
            </div>

            {/* Progress bar */}
            <motion.div
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              transition={{ duration: 4, ease: "linear" }}
              className="h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 mt-3 origin-left"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
