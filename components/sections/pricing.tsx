"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Zap } from "lucide-react"
import Link from "next/link"

export default function PricingSection() {
  const features = [
    "All 5 Resume Styles",
    "Lifetime Access",
    "Free Hosting",
    "Free Updates",
    "Custom Link",
    "Mobile & Desktop",
    "Full Customization",
  ]

  return (
    <section className="relative w-full py-20 md:py-32 px-4 md:px-6 bg-black">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple, Transparent <span className="text-cyan-400">Pricing</span>
          </h2>
          <p className="text-neutral-400 text-lg">One-time payment. No subscriptions. No hidden fees.</p>
        </motion.div>

        <motion.div
          className="relative bg-gradient-to-br from-neutral-900 to-black border-2 border-cyan-500/50 rounded-2xl p-8 md:p-12 text-center overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ borderColor: "rgb(34 211 238)" }}
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-cyan-500/5 blur-3xl" />

          <div className="relative z-10">
            <div className="inline-block px-4 py-1 bg-cyan-500/20 border border-cyan-500/50 rounded-full mb-6">
              <span className="text-cyan-400 text-sm font-semibold flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Limited-Time Launch Price
              </span>
            </div>

            <h3 className="text-3xl font-bold text-white mb-2">CVWEBX PRO</h3>
            <p className="text-neutral-400 mb-8">One-Time Fee</p>

            <div className="mb-8">
              <span className="text-6xl font-bold text-white">₹499</span>
              <p className="text-neutral-400 mt-2">Will increase soon. Lock in your price now.</p>
            </div>

            <motion.div
              className="space-y-4 mb-10 text-left max-w-sm mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <Check className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-neutral-300">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            <Link href="https://payments.cashfree.com/forms/cvwebx" className="w-full">
              <Button
                size="lg"
                className="w-full bg-white text-black hover:bg-neutral-100 font-semibold rounded-full text-base py-6 mb-4"
              >
                Get Started for ₹499
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>

            <p className="text-neutral-500 text-sm">30-day money-back guarantee. No questions asked.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
