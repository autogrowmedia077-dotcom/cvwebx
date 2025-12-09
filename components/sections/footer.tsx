"use client"

import { motion } from "framer-motion"
import { Mail, MessageCircle, Heart } from "lucide-react"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative w-full py-12 px-4 md:px-6 bg-black border-t border-neutral-800">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-xl font-bold text-white mb-4">CVWEBX</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Create stunning, interactive web resumes that impress recruiters and land you interviews.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-neutral-400 text-sm">
              <li>
                <a href="#" className="hover:text-cyan-400 transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition">
                  Templates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition">
                  Blog
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-neutral-400 text-sm">
              <li>
                <a href="#" className="hover:text-cyan-400 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition">
                  Refund Policy
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-semibold text-white mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:support@cvwebx.com"
                className="flex items-center gap-2 text-neutral-400 hover:text-cyan-400 transition text-sm"
              >
                <Mail className="w-4 h-4" />
                support@cvwebx.com
              </a>
              <a href="#" className="flex items-center gap-2 text-neutral-400 hover:text-cyan-400 transition text-sm">
                <MessageCircle className="w-4 h-4" />
                WhatsApp Support
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="py-6 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between text-sm text-neutral-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p>
            © {year} CVWEBX. All rights reserved. Made with <Heart className="w-4 h-4 inline text-red-500 mx-1" /> for
            job seekers.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-cyan-400 transition">
              Twitter
            </a>
            <a href="#" className="hover:text-cyan-400 transition">
              LinkedIn
            </a>
            <a href="#" className="hover:text-cyan-400 transition">
              Instagram
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
