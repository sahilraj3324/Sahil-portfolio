"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const navItems = [
    { name: "Home", path: "/" },
    { name: "Experience", path: "/experience" },
    { name: "Freelance", path: "/freelance" },
    { name: "Projects", path: "/projects" },
    { name: "Education", path: "/education" },
    { name: "Achievements", path: "/achievement" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
];

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6">
            <nav className="flex items-center gap-1 rounded-full border border-white/10 bg-black/50 px-4 py-2 backdrop-blur-md shadow-lg">
                {navItems.map((item) => {
                    const isActive = pathname === item.path;
                    return (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={cn(
                                "relative px-4 py-2 text-sm font-medium transition-colors hover:text-white",
                                isActive ? "text-white" : "text-white/60"
                            )}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="active-nav"
                                    className="absolute inset-0 rounded-full bg-white/10"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="relative z-10">{item.name}</span>
                        </Link>
                    );
                })}
            </nav>
        </header>
    );
}
