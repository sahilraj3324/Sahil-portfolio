"use client";

import { motion } from "framer-motion";

const skills = [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" },
    { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "DynamoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "Amazon RDS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "CI/CD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg" },
    { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
    { name: "EC2", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
];

export default function SkillsPreview() {
    return (
        <section className="py-20 border-t border-white/5">
            <div className="mb-10">
                <h2 className="text-2xl font-bold text-white mb-2">Tech Stack</h2>
                <p className="text-neutral-400">Technologies I work with</p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <div className="animate-marquee whitespace-nowrap flex gap-8">
                    {[...skills, ...skills, ...skills].map((skill, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 min-w-[150px]"
                        >
                            <div className="w-8 h-8 relative">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                            </div>
                            <span className="font-medium text-neutral-200">{skill.name}</span>
                        </div>
                    ))}
                </div>

                <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-8 ml-8">
                    {[...skills, ...skills, ...skills].map((skill, index) => (
                        <div
                            key={`clone-${index}`}
                            className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 min-w-[150px]"
                        >
                            <div className="w-8 h-8 relative">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                            </div>
                            <span className="font-medium text-neutral-200">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
