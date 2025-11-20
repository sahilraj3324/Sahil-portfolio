"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col-reverse md:flex-row items-center justify-between pt-20 gap-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6 max-w-2xl"
      >
        <span className="text-blue-400 font-medium tracking-wider uppercase">
          Software Engineer
        </span>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
          Hi, my name is <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Sahil
          </span>
        </h1>

        <p className="text-xl text-neutral-400 max-w-xl leading-relaxed">
          I'm a passionate developer specializing in building exceptional digital experiences.
          Currently focused on building accessible, human-centered products.
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <Link
            href="/projects"
            className="group flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-neutral-200 transition-colors"
          >
            View Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/contact"
            className="flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full font-medium hover:bg-white/10 transition-colors text-white"
          >
            Contact Me
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-64 h-64 md:w-96 md:h-96 shrink-0"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10">
          <Image
            src="/My image.png"
            alt="Sahil"
            fill
            className="object-cover"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
