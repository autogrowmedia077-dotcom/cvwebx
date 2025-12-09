"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Smartphone, Film, Layout, Briefcase, Zap, ArrowRight } from "lucide-react"

export default function ProductFormatsSection() {
  const formats = [
    {
      icon: Smartphone,
      title: "Mobile App Web Resume",
      description: "App-like navigation, smooth transitions, tap-friendly UI.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Film,
      title: "Animated Scroll Web Resume",
      description: "Cinematic scroll experience with modern animations.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Layout,
      title: "Interactive Portfolio Resume",
      description: "Perfect for designers, developers, creators.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Briefcase,
      title: "Minimal Professional Web Resume",
      description: "Clean, ATS-friendly, corporate-ready.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Zap,
      title: "Neo-Futuristic Web Resume",
      description: "Cyber-styled resume for tech enthusiasts.",
      color: "from-cyan-500 to-blue-500",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="relative w-full py-20 md:py-32 px-4 md:px-6 bg-black">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Choose Your <span className="text-cyan-400">Resume Style</span>
          </h2>
          <p className="text-neutral-400 text-lg">5 premium resume templates designed for modern job hunting</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {formats.map((format, index) => (
            <motion.div
              key={index}
              className="group relative p-6 bg-gradient-to-br from-neutral-900 to-black border border-neutral-800 rounded-xl hover:border-cyan-500/50 transition overflow-hidden"
              variants={cardVariants}
              whileHover={{ y: -5 }}
            >
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${format.color} opacity-0 group-hover:opacity-5 transition duration-300`}
              />

              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${format.color} p-2.5 mb-4`}>
                  <format.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{format.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{format.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Button
            size="lg"
            className="bg-white text-black hover:bg-neutral-100 font-semibold rounded-full text-base px-8"
          >
            Choose My Style – ₹499
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
