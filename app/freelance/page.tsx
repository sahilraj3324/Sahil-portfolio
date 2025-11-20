"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import React from "react";

const freelanceProjects = [
    {
        title: "Maharaja Molded Furniture",
        client: "E-Commerce Website",
        description: "Developed a fully responsive e-commerce website for Maharaja Molded Furniture, a brand specializing in high-quality plastic furniture. The platform allows users to browse product categories, explore detailed product pages, and submit purchase inquiries. Implemented a modern UI using React and Next.js with optimized performance, SEO-friendly pages, and fast loading times.",
        tags: ["Next.js", "React", "Tailwind CSS"],
        link: "https://maharajamoldedfurniture.com/",
    },
    {
        title: "Chhattisgarh Trails & Hikes",
        client: "Trekking Information Platform",
        description: "Built an interactive trekking platform showcasing hiking trails across Chhattisgarh. Integrated Google Maps with satellite view and KML file support to display accurate trail routes, elevation paths, and location markers. The website provides bilingual trail information, detailed trek stats, and visually rich maps.",
        tags: ["Next.js", "React", "Google Maps API"],
        link: "https://www.cgtrailsandhikes.org/",
    },
    {
        title: "Vansh Vriksh",
        client: "Family Generation & Blood-Relation Analyzer",
        description: "Created a cross-platform mobile application that helps users visualize and analyze family generations, relationships, and blood connections. Designed interactive UI flows to build family trees, track lineage, and understand relational ties clearly. Implemented efficient state management and optimized rendering for complex node structures.",
        tags: ["Flutter", "React"],
        link: "#",
    },
];

export default function Freelance() {
    return (
        <div className="max-w-6xl mx-auto">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
                Freelance Projects
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {freelanceProjects.map((project, index) => (
                    <FreelanceCard key={index} project={project} index={index} />
                ))}
            </div>
        </div>
    );
}

function FreelanceCard({ project, index }: { project: typeof freelanceProjects[0], index: number }) {
    const [isExpanded, setIsExpanded] = React.useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all hover:-translate-y-1 flex flex-col h-full"
        >
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-sm text-purple-400/80">{project.client}</p>
                </div>
                <Link href={project.link} target="_blank" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                    <ExternalLink size={18} />
                </Link>
            </div>

            <div className="mb-6 flex-grow">
                <p className={`text-neutral-300 transition-all duration-300 ${isExpanded ? "" : "line-clamp-3"}`}>
                    {project.description}
                </p>
                {project.description.length > 100 && (
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="text-sm text-purple-400 hover:text-purple-300 mt-2 font-medium focus:outline-none"
                    >
                        {isExpanded ? "Read Less" : "Read More"}
                    </button>
                )}
            </div>

            <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                    <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}
