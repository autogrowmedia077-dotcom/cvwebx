"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      text: "Got interview calls in 2 days after switching to CVWEBX. My web resume stands out from PDFs.",
      name: "Priya Sharma",
      title: "UI/UX Designer",
      city: "Bangalore",
      rating: 5,
    },
    {
      text: "Way better than boring PDF resumes. Recruiters actually spent time on my portfolio.",
      name: "Rohan Gupta",
      title: "Full Stack Developer",
      city: "Mumbai",
      rating: 5,
    },
    {
      text: "My portfolio now looks premium and professional. Best ₹499 I spent on my career.",
      name: "Ananya Verma",
      title: "Product Manager",
      city: "Delhi",
      rating: 5,
    },
    {
      text: "Worth every rupee. Changed how I present myself to potential employers.",
      name: "Vikas Patel",
      title: "Marketing Manager",
      city: "Pune",
      rating: 5,
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
            Loved by <span className="text-cyan-400">Job Seekers</span>
          </h2>
          <p className="text-neutral-400 text-lg">Real testimonials from professionals who landed their dream jobs</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-6 bg-neutral-900 border border-neutral-800 rounded-lg hover:border-cyan-500/30 transition"
              variants={cardVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-neutral-300 text-sm leading-relaxed mb-4">"{testimonial.text}"</p>
              <div>
                <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                <p className="text-neutral-400 text-xs">
                  {testimonial.title} • {testimonial.city}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
