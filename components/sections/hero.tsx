"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"

export default function HeroSection() {
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 0.1, scale: 1 },
  }

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
      <motion.div className="absolute inset-0 z-0" variants={gridVariants} initial="hidden" animate="visible">
        {Array.from({ length: 12 }).map((_, i) =>
          Array.from({ length: 12 }).map((_, j) => (
            <motion.div
              key={`${i}-${j}`}
              className="absolute border border-neutral-800"
              style={{
                width: "100px",
                height: "100px",
                left: `${i * 100}px`,
                top: `${j * 100}px`,
              }}
              variants={itemVariants}
            />
          )),
        )}
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight text-balance">
                Your Resume Is Outdated.
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300">
                  {" "}
                  Your Web-Resume Shouldn't Be.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-lg text-pretty">
                Create stunning, interactive, job-ready web resumes in under 24 hours. Impress recruiters instantly.
                Just ₹499 only.
              </p>
            </div>

            {/* Trust badges */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {["Recruiter-Optimized", "Mobile First Design", "Instant Setup", "No Coding Required"].map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-2 px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-full text-sm text-neutral-300"
                >
                  <Zap className="w-4 h-4 text-cyan-400" />
                  {badge}
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button
                size="lg"
                className="bg-white text-black hover:bg-neutral-100 font-semibold rounded-full text-base px-8"
              >
                Create My Web Resume Now – ₹499
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-neutral-600 text-white hover:bg-neutral-900 rounded-full text-base px-8"
              >
                View Live Samples
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side - Resume mockups */}
          <motion.div
            className="relative h-96 lg:h-full hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {[
                { delay: 0, rotation: -8, x: -40, y: -20 },
                { delay: 0.1, rotation: 0, x: 0, y: 0 },
                { delay: 0.2, rotation: 8, x: 40, y: 20 },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  className="absolute w-64 h-80 bg-gradient-to-br from-neutral-900 to-black border border-neutral-700 rounded-lg p-6 shadow-2xl"
                  animate={{
                    y: [0, -20, 0],
                    rotate: card.rotation,
                  }}
                  transition={{
                    duration: 4,
                    delay: card.delay,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                  style={{
                    x: card.x,
                    y: card.y,
                  }}
                >
                  <div className="w-full h-full bg-neutral-800 rounded border border-neutral-700 flex items-center justify-center">
                    <div className="text-center space-y-3 px-4">
                      <div className="w-16 h-16 bg-cyan-500 rounded-full mx-auto" />
                      <div className="h-2 bg-neutral-700 rounded w-24 mx-auto" />
                      <div className="h-2 bg-neutral-700 rounded w-32 mx-auto" />
                      <div className="h-2 bg-neutral-700 rounded w-20 mx-auto" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
