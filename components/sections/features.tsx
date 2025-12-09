"use client"

import { motion } from "framer-motion"
import {
  Globe,
  Smartphone,
  Eye,
  Search,
  Share2,
  Edit3,
  Download,
  Mail,
  Link,
  ImageIcon,
  BarChart3,
  Moon,
} from "lucide-react"

export default function FeaturesSection() {
  const features = [
    { icon: Globe, text: "Custom Domain Support" },
    { icon: Smartphone, text: "Mobile Optimized" },
    { icon: Eye, text: "Recruiter-Friendly UI" },
    { icon: Search, text: "SEO-Ready" },
    { icon: Share2, text: "One-Click Sharing" },
    { icon: Edit3, text: "Live Editing" },
    { icon: Download, text: "Download PDF Backup" },
    { icon: Mail, text: "Contact Forms" },
    { icon: Link, text: "Social Links" },
    { icon: ImageIcon, text: "Portfolio Gallery" },
    { icon: BarChart3, text: "Skill Progress Bars" },
    { icon: Moon, text: "Dark & Light Mode" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
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
            Everything You Need to
            <span className="text-cyan-400"> Win Interviews</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3 p-4 bg-neutral-900 border border-neutral-800 rounded-lg hover:border-cyan-500/30 transition group"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <feature.icon className="w-5 h-5 text-cyan-400 flex-shrink-0 group-hover:scale-110 transition" />
              <span className="text-neutral-300 text-sm">{feature.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
