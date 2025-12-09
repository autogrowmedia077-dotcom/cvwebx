"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"

export default function ComparisonSection() {
  const comparison = [
    { feature: "Mobile Friendly", pdf: false, cvwebx: true },
    { feature: "Interactive Elements", pdf: false, cvwebx: true },
    { feature: "Live Updates", pdf: false, cvwebx: true },
    { feature: "Visual Branding", pdf: false, cvwebx: true },
    { feature: "Personal Website", pdf: false, cvwebx: true },
    { feature: "Shareable Link", pdf: false, cvwebx: true },
    { feature: "ATS Friendly", pdf: true, cvwebx: true },
    { feature: "Easy to Update", pdf: false, cvwebx: true },
  ]

  return (
    <section className="relative w-full py-20 md:py-32 px-4 md:px-6 bg-black">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            PDF vs <span className="text-cyan-400">CVWEBX</span>
          </h2>
        </motion.div>

        <motion.div
          className="overflow-x-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-neutral-800">
                <th className="py-4 px-4 font-semibold text-white">Feature</th>
                <th className="py-4 px-4 font-semibold text-neutral-400 text-center">PDF Resume</th>
                <th className="py-4 px-4 font-semibold text-cyan-400 text-center">CVWEBX</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((item, index) => (
                <motion.tr
                  key={index}
                  className="border-b border-neutral-800 hover:bg-neutral-900/50 transition"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <td className="py-4 px-4 text-neutral-300">{item.feature}</td>
                  <td className="py-4 px-4 text-center">
                    {item.pdf ? (
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-red-500 mx-auto" />
                    )}
                  </td>
                  <td className="py-4 px-4 text-center">
                    <Check className="w-5 h-5 text-cyan-400 mx-auto" />
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  )
}
