"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { X, Check, ArrowRight } from "lucide-react"

export default function ProblemSolutionSection() {
  const problems = [
    { icon: X, text: "PDF resumes look the same" },
    { icon: X, text: "No personality or interaction" },
    { icon: X, text: "Don't work well on mobile" },
    { icon: X, text: "Hard to stand out" },
    { icon: X, text: "No live updates" },
  ]

  const solutions = [
    { icon: Check, text: "Interactive websites" },
    { icon: Check, text: "Motion & animations" },
    { icon: Check, text: "Live updates anytime" },
    { icon: Check, text: "One resume for all platforms" },
    { icon: Check, text: "Personal branding ready" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
            Traditional Resumes Are Getting Ignored.
            <span className="text-cyan-400"> Yours Won't.</span>
          </h2>
          <p className="text-neutral-400 text-lg">The shift from PDF to web has begun. Don't get left behind.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Problems */}
          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">The Problem</h3>
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 p-4 bg-neutral-900 border border-neutral-800 rounded-lg hover:border-neutral-700 transition"
                variants={itemVariants}
              >
                <problem.icon className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-neutral-300">{problem.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Solutions */}
          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">CVWEBX Solution</h3>
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 p-4 bg-neutral-900 border border-cyan-500/30 rounded-lg hover:border-cyan-400 transition"
                variants={itemVariants}
              >
                <solution.icon className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-neutral-300">{solution.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Button
            size="lg"
            className="bg-cyan-500 text-black hover:bg-cyan-400 font-semibold rounded-full text-base px-8"
          >
            Upgrade to Web-Resume – ₹499
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
