"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Github, ExternalLink } from "lucide-react";

const projects = [
    {
        title: "Version Control (Nuke)",
        description: "A fully functional version control system with CLI. Features Node.js backend and React frontend.",
        tags: ["Node.js", "React", "AWS S3"],
        link: "/projects",
    },
    {
        title: "Issue Tracker (Atom)",
        description: "Full-stack issue tracker handling 1000+ users. Built with Next.js, Prisma, and SQL.",
        tags: ["Next.js", "Prisma", "SQL"],
        link: "/projects",
    },
];

export default function ProjectsPreview() {
    return (
        <section className="py-20">
            <div className="flex justify-between items-end mb-10">
                <div>
                    <h2 className="text-3xl font-bold text-white mb-2">Featured Projects</h2>
                    <p className="text-neutral-400">Some of my recent work</p>
                </div>
                <Link href="/projects" className="group flex items-center gap-2 text-white hover:text-blue-400 transition-colors">
                    View All
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all hover:-translate-y-1"
                    >
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-neutral-300 mb-6 leading-relaxed">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 text-sm rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
