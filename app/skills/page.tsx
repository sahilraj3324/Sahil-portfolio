"use client";

import { motion } from "framer-motion";

const skillCategories = [
    {
        title: "Languages",
        skills: [
            { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
            { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
            { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
            { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
            { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        ],
    },
    {
        title: "Frameworks",
        skills: [
            { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
            { name: ".NET", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
            { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
            { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
            { name: "NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" },
            { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
        ],
    },
    {
        title: "Databases",
        skills: [
            { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
            { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
            { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
            { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
            { name: "DynamoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
            { name: "Amazon RDS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        ],
    },
    {
        title: "Developer Tools",
        skills: [
            { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
            { name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
            { name: "Thunder Client", icon: "https://www.thunderclient.com/favicon.ico" }, // Using favicon as fallback
            { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
            { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
            { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
            { name: "Ubuntu", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg" },
            { name: "CI/CD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg" },
            { name: "EC2", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        ],
    },
    {
        title: "Libraries",
        skills: [
            { name: "React Router", icon: "https://reactrouter.com/favicon-light.png" },
            { name: "NextUI", icon: "https://nextui.org/favicon.ico" },
            { name: "Material UI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
            { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
            { name: "Shadcn UI", icon: "https://ui.shadcn.com/favicon.ico" },
            { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
            { name: "Axios", icon: "https://axios-http.com/assets/favicon.ico" },
        ],
    },
];

export default function Skills() {
    return (
        <div className="max-w-5xl mx-auto">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
            >
                Technical Skills
            </motion.h1>

            <div className="space-y-12">
                {skillCategories.map((category, categoryIndex) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: categoryIndex * 0.2 }}
                    >
                        <h2 className="text-2xl font-semibold mb-6 text-white/80 pl-2 border-l-4 border-cyan-500">
                            {category.title}
                        </h2>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            {category.skills.map((skill, skillIndex) => (
                                <motion.div
                                    key={skill.name}
                                    whileHover={{ scale: 1.05 }}
                                    className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/30 transition-all group"
                                >
                                    <div className="w-12 h-12 mb-3 relative flex items-center justify-center">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={skill.icon}
                                            alt={skill.name}
                                            className="w-full h-full object-contain filter group-hover:grayscale-0 transition-all duration-300"
                                        />
                                    </div>
                                    <span className="text-sm font-medium text-neutral-400 group-hover:text-white transition-colors">
                                        {skill.name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
