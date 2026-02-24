import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Mail, Phone, MapPin, Github, Linkedin, Code } from 'lucide-react';

export const Hero: React.FC<{
    name: string,
    email: string,
    phone: string,
    location: string,
    github: string,
    linkedin: string,
    leetcode: string
}> = ({ name, email, phone, location, github, linkedin, leetcode }) => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20 px-4">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,243,255,0.08),transparent_50%)]" />

            <div className="z-10 text-center space-y-8 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-neon-cyan font-mono text-lg md:text-xl mb-4 tracking-widest uppercase">
                        Vansh Gupta
                    </h2>
                    <h1 className="text-5xl md:text-8xl font-bold font-heading mb-6 tracking-tight">
                        Product <span className="text-gradient">Engineer</span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-2xl md:text-4xl font-medium text-gray-400"
                >
                    <TypeAnimation
                        sequence={[
                            'Full Stack Developer',
                            2000,
                            'AI Automation Architect',
                            2000,
                            'Java Spring Boot Specialist',
                            2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </motion.div>

                {/* Contact Info Pills */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-wrap justify-center gap-4 text-sm md:text-base text-gray-400"
                >
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                        <Mail size={16} className="text-neon-cyan" />
                        <span>{email}</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                        <Phone size={16} className="text-neon-cyan" />
                        <span>{phone}</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                        <MapPin size={16} className="text-neon-cyan" />
                        <span>{location}</span>
                    </div>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="flex justify-center gap-6"
                >
                    <a href={github} target="_blank" rel="noreferrer" className="p-3 rounded-full glass-card hover:text-neon-cyan transition-colors">
                        <Github size={24} />
                    </a>
                    <a href={linkedin} target="_blank" rel="noreferrer" className="p-3 rounded-full glass-card hover:text-neon-cyan transition-colors">
                        <Linkedin size={24} />
                    </a>
                    <a href={leetcode} target="_blank" rel="noreferrer" className="p-3 rounded-full glass-card hover:text-neon-cyan transition-colors">
                        <Code size={24} />
                    </a>
                </motion.div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <a href="#about" className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-1 cursor-pointer">
                    <div className="w-1 h-2 bg-white/40 rounded-full" />
                </a>
            </div>
        </section>
    );
};
