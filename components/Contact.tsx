"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Contact() {
    return (
        <section className="py-20 border-t border-white/5">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-white mb-6"
                >
                    Let's Work Together
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto"
                >
                    I'm currently available for freelance projects and open to full-time opportunities.
                    If you have a project that needs some creative touch, feel free to contact me.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex justify-center gap-6"
                >
                    <Link
                        href="mailto:contact@example.com"
                        className="flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-neutral-200 transition-colors"
                    >
                        <Mail size={20} />
                        Say Hello
                    </Link>
                </motion.div>

                <div className="flex justify-center gap-6 mt-12">
                    {[
                        { icon: Github, href: "https://github.com/sahilraj3324" },
                        { icon: Linkedin, href: "https://www.linkedin.com/in/sahilraj3324/" },
                        { icon: Twitter, href: "#" },
                    ].map((social, index) => (
                        <Link
                            key={index}
                            href={social.href}
                            className="p-3 rounded-full bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 transition-all"
                        >
                            <social.icon size={24} />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
