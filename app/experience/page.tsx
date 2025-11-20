"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const experiences = [
    {
        role: "Software Engineer",
        company: "Pitlox Media OPC Pvt. Ltd",
        location: "Noida, India",
        period: "02/2025 – Present",
        description: "Delivered major projects including full-stack web and mobile applications.",
        skills: ["Next.js", "React", "Node.js", "MongoDB", "Flutter", "Dart", "Firebase", "ASP.NET", "C#"],
        projects: [
            {
                name: "eProperty – Property & Item Trading Portal",
                details: [
                    "Built a complete portal for buying, selling, and renting properties and general items.",
                    "Implemented a real-time chat system using Socket.IO for smooth buyer–seller conversations.",
                    "Created an advanced Admin Dashboard for managing users, properties, and transactions.",
                    "Developed using Next.js (JavaScript) and React for a fast, responsive UI.",
                    "Engineered scalable backend APIs with Node.js & MongoDB."
                ]
            },
            {
                name: "Ecocys – B2B E-Commerce System",
                details: [
                    "Developed a large-scale B2B e-commerce platform for Vendors, Retailers, and Admin operations.",
                    "Built UI using React.js, JavaScript, Firebase, and backend using ASP.NET, C#.",
                    "Integrated image storage using Firebase.",
                    "Developed backend models, controllers, and APIs with .NET & ASP.NET MVC.",
                    "Added admin features for viewing, editing, deleting, and adding vendors, retailers, orders, and products.",
                    "Integrated Payment Gateway, Shipping API, and GST Verification."
                ]
            },
            {
                name: "RideMate – Car-Pooling Application",
                details: [
                    "Built a complete car-pooling mobile app for drivers and passengers.",
                    "Developed using Flutter, Dart, Firebase, and PHP.",
                    "Implemented Firebase-based OTP verification, database handling, and image storage.",
                    "Integrated Google Maps API for route finding, navigation, and live location.",
                    "Added Razorpay payment integration and cash-based payments.",
                    "Designed Admin Panel for approving users, managing cars, posts, and themes."
                ]
            },
            {
                name: "LegalNetwork – Legal Services Platform",
                details: [
                    "Built a cross-platform legal service application using Flutter, Firebase, and Node.js.",
                    "Implemented chat system for users to talk directly with lawyers.",
                    "Designed a dynamic News page for legal updates and articles.",
                    "Added Legal Diary for users to track cases, notes, and reminders.",
                    "Built a Query page to ask questions and get responses from lawyers.",
                    "Developed the companion Expert Vakeel Website using Next.js, React, Tailwind CSS, and Firebase.",
                    "Created a complete Admin Panel using Next.js & React for managing lawyers, users, news, support queries, and diary records.",
                    "Built backend with Node.js and Firebase, supporting chat, authentication, notifications, and data management."
                ]
            }
        ]
    },
    {
        role: "SDE Intern",
        company: "Ask Senior",
        location: "Remote, India",
        period: "07/2024 – 10/2024",
        description: "Contributed to full-stack development and optimization of web applications.",
        skills: ["Next.js", "React", "Docker", "Git", "Bash"],
        achievements: [
            "Optimized slow pages by building a new rendering pipeline using Next.js & React Hooks, reducing rendering time by 20%.",
            "Built a user record tracking feature and deployed using Docker, improving deployment speed by 30%.",
            "Managed Git-based code collaboration, improving team efficiency by 25% and reducing integration conflicts by 40%.",
            "Contributed to full-stack development using Next.js, React, Docker, Git, and Bash."
        ]
    },
];

export default function Experience() {
    return (
        <div className="max-w-5xl mx-auto">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
                Work Experience
            </motion.h1>

            <div className="space-y-12">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="relative pl-8 border-l-2 border-white/10 hover:border-blue-500/50 transition-colors"
                    >
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-neutral-900 border-2 border-blue-500" />

                        <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-2">
                                <div>
                                    <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                                    <div className="flex items-center gap-2 text-blue-400 text-lg">
                                        <Briefcase size={18} />
                                        <span>{exp.company}</span>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start md:items-end text-sm text-neutral-400 gap-1">
                                    <div className="flex items-center gap-1">
                                        <Calendar size={14} />
                                        <span>{exp.period}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MapPin size={14} />
                                        <span>{exp.location}</span>
                                    </div>
                                </div>
                            </div>

                            {exp.description && <p className="text-neutral-300 mb-4 italic">{exp.description}</p>}

                            {/* Projects Section for Pitlox */}
                            {exp.projects && (
                                <div className="space-y-6 mb-6">
                                    <h4 className="text-lg font-semibold text-white/90 border-b border-white/10 pb-2">Major Projects Delivered</h4>
                                    {exp.projects.map((project, pIndex) => (
                                        <div key={pIndex} className="bg-white/5 p-4 rounded-lg">
                                            <h5 className="text-blue-300 font-medium mb-2">{project.name}</h5>
                                            <ul className="list-disc list-inside space-y-1 text-sm text-neutral-300">
                                                {project.details.map((detail, dIndex) => (
                                                    <li key={dIndex} className="leading-relaxed pl-1">{detail}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Achievements Section for Ask Senior */}
                            {exp.achievements && (
                                <div className="mb-6">
                                    <h4 className="text-lg font-semibold text-white/90 border-b border-white/10 pb-2 mb-3">Key Achievements</h4>
                                    <ul className="list-disc list-inside space-y-2 text-neutral-300">
                                        {exp.achievements.map((achievement, aIndex) => (
                                            <li key={aIndex} className="leading-relaxed">{achievement}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/5">
                                {exp.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
