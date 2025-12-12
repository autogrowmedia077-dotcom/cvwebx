"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"
import Link from "next/link"

export default function FinalCTASection() {
  return (
    <section className="relative w-full py-20 md:py-32 px-4 md:px-6 bg-black overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, cyan 0%, transparent 50%), radial-gradient(circle at 80% 80%, blue 0%, transparent 50%)",
          backgroundSize: "200% 200%",
        }}
      />

      <div className="container mx-auto max-w-2xl relative z-10">
        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Your Career Deserves More Than a<span className="text-cyan-400"> PDF.</span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 max-w-xl mx-auto leading-relaxed">
            Build a powerful digital first impression with CVWEBX today. Stand out from the competition and land
            interviews faster.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row items-center gap-4 justify-center pt-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link href="https://payments.cashfree.com/forms/cvwebx">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-neutral-100 font-semibold rounded-full text-base px-8 h-12"
              >
                Build My Web Resume – ₹499
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-full text-sm text-neutral-300 h-12">
                <Zap className="w-4 h-4 text-cyan-400" />
                <span>Limited-time launch price. Increasing soon.</span>
              </div>
            </motion.div>

          </motion.div> {/* ← Added this closing tag */}

        </motion.div>
      </div>
    </section>
  )
}
