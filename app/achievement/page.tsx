"use client";

import { motion } from "framer-motion";
import { Trophy, Award, Medal, Star } from "lucide-react";
import Image from "next/image";

const achievements = [
    {
        title: "Smart India Hackathon (SIH) 2023",
        organization: "Government of India",
        date: "2023",
        description: "Finalist in the nationwide hackathon solving real-world problems.",
        icon: Trophy,
        color: "text-yellow-500",
        bg: "bg-yellow-500/10",
        image: "/sih.png",
    },
    {
        title: "Innovation, Design and Entrepreneurship (IDE)",
        organization: "IDE Bootcamp",
        date: "2024",
        description: "Finalist in the IDE competition showcasing innovative solutions.",
        icon: Medal,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        image: "/ide.png",
    },
    {
        title: "Searching, Sorting and Indexing in Java",
        organization: "Chandigarh University",
        date: "2022",
        description: "Recognized for proficiency and understanding of core algorithms.",
        icon: Award,
        color: "text-purple-500",
        bg: "bg-purple-500/10",
        image: "/java.png",
    },
    {
        title: "Led Transport Team (CAB Meeting)",
        organization: "Chandigarh University",
        date: "2023",
        description: "Led the transport team under Corporate Advisory Board (CAB) meeting.",
        icon: Star,
        color: "text-green-500",
        bg: "bg-green-500/10",
        image: "/transport.png",
    },
];

export default function Achievement() {
    return (
        <div className="max-w-6xl mx-auto">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent"
            >
                Achievements
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {achievements.map((achievement, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all hover:-translate-y-1"
                    >
                        <div className="relative h-48 w-full overflow-hidden">
                            <Image
                                src={achievement.image}
                                alt={achievement.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                            <div className={`absolute bottom-4 left-4 p-3 rounded-xl ${achievement.bg} ${achievement.color} backdrop-blur-sm`}>
                                <achievement.icon size={24} />
                            </div>
                        </div>

                        <div className="p-6">
                            <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                            <div className="flex items-center gap-2 text-sm text-neutral-400 mb-4">
                                <span className="font-medium text-white/80">{achievement.organization}</span>
                                <span>•</span>
                                <span>{achievement.date}</span>
                            </div>
                            <p className="text-neutral-300 leading-relaxed">
                                {achievement.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
