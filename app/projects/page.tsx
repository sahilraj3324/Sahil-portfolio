"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Star, GitFork, Layers } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "Version Control (Nuke)",
        description: "Engineered a fully functional version control system with a CLI using Yargs. Users can manage repositories with commands like Init, add, commit, push, pull, and revert. Features a robust Node.js/Express backend with MongoDB and AWS S3 for secure file storage (90% more secure). Includes a responsive frontend built with React, Shadcn UI, and Tailwind CSS.",
        tags: ["Yargs", "Node.js", "Express", "AWS S3", "MongoDB", "React", "Shadcn UI", "Tailwind CSS"],
        github: "#",
        demo: "#",
        stars: 128,
        forks: 34,
        category: "System Tool"
    },
    {
        title: "Issue Tracker (Atom)",
        description: "Deployed a full-stack Issue Tracker capable of handling 1000+ users. Built with React, Next.js, and Tailwind CSS for a 10% better dev experience. Utilizes Prisma and SQL for scalable and reliable data management of issues.",
        tags: ["Node.js", "Prisma", "SQL", "React", "Next.js", "Tailwind CSS"],
        github: "#",
        demo: "#",
        stars: 85,
        forks: 12,
        category: "Web App"
    }
];

export default function Projects() {
    return (
        <div className="max-w-6xl mx-auto">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold mb-8 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"
            >
                Featured Projects
            </motion.h1>

            <div className="grid grid-cols-1 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/50 transition-all hover:-translate-y-1"
                    >
                        <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <span className="px-3 py-1 text-xs rounded-full bg-white/10 text-neutral-300 border border-white/10">
                                        {project.category}
                                    </span>
                                </div>
                                <p className="text-neutral-300 leading-relaxed max-w-3xl">
                                    {project.description}
                                </p>
                            </div>

                            <div className="flex gap-2 shrink-0">
                                <Link href={project.github} className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white hover:text-green-400">
                                    <Github size={22} />
                                </Link>
                                <Link href={project.demo} className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white hover:text-green-400">
                                    <ExternalLink size={22} />
                                </Link>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 mb-6 text-sm text-neutral-400 border-b border-white/5 pb-6">
                            <div className="flex items-center gap-2">
                                <Star size={18} className="text-yellow-500" />
                                <span>{project.stars} stars</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <GitFork size={18} />
                                <span>{project.forks} forks</span>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 text-sm rounded-full bg-green-500/10 text-green-300 border border-green-500/20 flex items-center gap-1"
                                >
                                    <Layers size={12} />
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
