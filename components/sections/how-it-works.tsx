"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Palette, FileText, Send } from "lucide-react"

export default function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      icon: Palette,
      title: "Choose Your Resume Style",
      description: "Select from 5 professionally designed templates that match your personality and industry.",
    },
    {
      number: 2,
      icon: FileText,
      title: "Fill Your Details (No Coding)",
      description:
        "Simple form to input your education, experience, skills, and projects. No technical knowledge needed.",
    },
    {
      number: 3,
      icon: Send,
      title: "Publish & Share Your Web Resume",
      description: "Get a live link instantly. Share on LinkedIn, email, or any platform with one unique URL.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
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
            It's <span className="text-cyan-400">Stupidly Simple</span>
          </h2>
          <p className="text-neutral-400 text-lg">Get your web resume live in 3 easy steps</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Connecting line */}
          <div className="hidden md:block absolute top-20 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />

          {steps.map((step, index) => (
            <motion.div key={index} className="relative" variants={itemVariants}>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 p-3 mb-6 flex items-center justify-center relative z-10">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="w-10 h-10 rounded-full bg-black border-2 border-cyan-500 flex items-center justify-center absolute top-6 left-1/2 transform -translate-x-1/2 z-20">
                  <span className="text-cyan-400 font-bold text-sm">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 mt-4">{step.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Button
            size="lg"
            className="bg-white text-black hover:bg-neutral-100 font-semibold rounded-full text-base px-8"
          >
            Launch My Resume Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
