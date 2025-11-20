"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Briefcase, Calendar } from "lucide-react";

export default function ExperiencePreview() {
    return (
        <section className="py-20 border-t border-white/5">
            <div className="flex justify-between items-end mb-10">
                <div>
                    <h2 className="text-3xl font-bold text-white mb-2">Experience</h2>
                    <p className="text-neutral-400">My professional journey</p>
                </div>
                <Link href="/experience" className="group flex items-center gap-2 text-white hover:text-purple-400 transition-colors">
                    View Full History
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10"
            >
                <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-1">Software Engineer</h3>
                        <div className="flex items-center gap-2 text-purple-400">
                            <Briefcase size={18} />
                            <span>Pitlox Media OPC Pvt. Ltd</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-400 bg-white/5 px-4 py-2 rounded-full self-start md:self-center">
                        <Calendar size={16} />
                        <span>02/2025 – Present</span>
                    </div>
                </div>

                <p className="text-neutral-300 leading-relaxed mb-6">
                    Delivering major projects including full-stack web and mobile applications.
                    Working with Next.js, React, Node.js, MongoDB, Flutter, and more to build scalable solutions like eProperty and Ecocys.
                </p>

                <div className="flex flex-wrap gap-2">
                    {["Next.js", "React", "Node.js", "MongoDB", "Flutter"].map((skill) => (
                        <span key={skill} className="px-3 py-1 text-sm rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                            {skill}
                        </span>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
