"use client";

import Contact from "@/components/Contact";
import { motion } from "framer-motion";

export default function ContactPage() {
    return (
        <div className="min-h-[80vh] flex flex-col justify-center max-w-4xl mx-auto">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
                Get in Touch
            </motion.h1>
            <Contact />
        </div>
    );
}
