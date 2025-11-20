"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
    {
        degree: "12th",
        school: "Pitts Modern School",
        location: "Chandigarh, India",
        period: "2019 - 2021",
        description: "",
    },
    {
        degree: "Bachelor of Science in Software Engineering",
        school: "Chandigarh University",
        location: "Chandigarh, India",
        period: "2021 - 2025",
        description: "Graduated with Honors. President of the Coding Club. Capstone project: Distributed Systems Framework.",
    },
];

export default function Education() {
    return (
        <div className="max-w-3xl mx-auto">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"
            >
                Education
            </motion.h1>

            <div className="relative">
                {/* Center Line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-yellow-500/50 to-transparent md:-translate-x-1/2" />

                <div className="space-y-12">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Dot */}
                            <div className="absolute left-[-4px] md:left-1/2 top-0 w-2 h-2 rounded-full bg-yellow-500 md:-translate-x-1/2 ring-4 ring-black" />

                            <div className="flex-1 ml-6 md:ml-0">
                                <div className={`bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-yellow-500/50 transition-all ${index % 2 === 0 ? "md:text-left" : "md:text-right"
                                    }`}>
                                    <div className={`flex flex-col gap-1 mb-2 ${index % 2 === 0 ? "md:items-start" : "md:items-end"
                                        }`}>
                                        <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                                        <p className="text-yellow-400 font-medium">{edu.school}</p>
                                    </div>

                                    <div className={`flex flex-col gap-1 mb-4 text-sm text-neutral-400 ${index % 2 === 0 ? "md:items-start" : "md:items-end"
                                        }`}>
                                        <div className="flex items-center gap-1">
                                            <Calendar size={14} />
                                            <span>{edu.period}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <MapPin size={14} />
                                            <span>{edu.location}</span>
                                        </div>
                                    </div>

                                    <p className="text-neutral-300">{edu.description}</p>
                                </div>
                            </div>

                            <div className="flex-1 hidden md:block" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
