"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

const samples = [
    {
        src: "/Animated-Web-App-Resume.jpeg",
        title: "Animated Web App Resume",
        description: "Dynamic and engaging resume with fluid animations.",
    },
    {
        src: "/Minimal-Professional-Web-App-Resume.jpeg",
        title: "Minimal Professional Resume",
        description: "Clean, crisp, and corporate-ready design.",
    },
    {
        src: "/Mobile-Web-App-Resume.jpeg",
        title: "Mobile First Resume",
        description: "Optimized for the best viewing experience on mobile devices.",
    },
    {
        src: "/NeoFuturistic-WebApp-Resume.jpeg",
        title: "Neo-Futuristic Resume",
        description: "Bold, modern, and forward-looking aesthetic.",
    },
    {
        src: "/Portifiolio-Web-App-resume.jpeg",
        title: "Portfolio Resume",
        description: "Showcase your work alongside your professional history.",
    },
]

export default function LiveSamplesPage() {
    return (
        <main className="min-h-screen bg-black text-white p-6 md:p-12">
            <div className="max-w-7xl mx-auto space-y-12">
                <header className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="space-y-2">
                        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-500">
                            Live Samples
                        </h1>
                        <p className="text-neutral-400 text-lg max-w-2xl">
                            Explore our collection of premium web-resume templates. Designed to stand out.
                        </p>
                    </div>
                    <Link href="/">
                        <Button variant="outline" className="rounded-full border-neutral-700 text-white hover:bg-neutral-900">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Home
                        </Button>
                    </Link>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {samples.map((sample, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group relative rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900/50 hover:border-neutral-600 transition-colors"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <Image
                                    src={sample.src || "/placeholder.svg"}
                                    alt={sample.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <div className="p-6 space-y-2">
                                <h3 className="text-xl font-bold text-white">{sample.title}</h3>
                                <p className="text-sm text-neutral-400">{sample.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    )
}
