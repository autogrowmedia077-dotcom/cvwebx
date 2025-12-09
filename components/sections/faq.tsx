"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Plus, Minus } from "lucide-react"

export default function FAQSection() {
  const [expanded, setExpanded] = useState<number | null>(0)

  const faqs = [
    {
      question: "Is this a monthly subscription?",
      answer: "No! CVWEBX is a one-time payment of ₹499. You get lifetime access with free updates.",
    },
    {
      question: "Can I edit my resume later?",
      answer:
        "Absolutely. You have full editing access anytime. Update your skills, experience, and portfolio on the fly.",
    },
    {
      question: "Is hosting included?",
      answer: "Yes! Free hosting is included. Your web resume is live instantly at your custom link.",
    },
    {
      question: "Do I get a custom link?",
      answer: "Yes, you can create a custom link like myname.cvwebx.com or use your own domain.",
    },
    {
      question: "Is it mobile optimized?",
      answer: "Completely! All resume templates are mobile-first and fully responsive across all devices.",
    },
    {
      question: "Will recruiters accept web resumes?",
      answer:
        "Yes! Modern recruiters love web resumes. They're interactive, showcase personality, and stand out from PDFs. Plus, you can download a PDF backup anytime.",
    },
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
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="relative w-full py-20 md:py-32 px-4 md:px-6 bg-black">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked <span className="text-cyan-400">Questions</span>
          </h2>
        </motion.div>

        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-neutral-800 rounded-lg overflow-hidden hover:border-cyan-500/30 transition"
              variants={itemVariants}
            >
              <button
                onClick={() => setExpanded(expanded === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between bg-neutral-900 hover:bg-neutral-800 transition text-left"
              >
                <span className="font-semibold text-white">{faq.question}</span>
                {expanded === index ? (
                  <Minus className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-neutral-400 flex-shrink-0" />
                )}
              </button>
              {expanded === index && (
                <motion.div
                  className="px-6 py-4 bg-black text-neutral-400 border-t border-neutral-800"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
