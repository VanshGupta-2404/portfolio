import React from 'react';
import { motion } from 'framer-motion';

export const Skills: React.FC<{ skills: string[] }> = ({ skills }) => {
    return (
        <section id="skills" className="scroll-mt-24 text-center">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold font-heading mb-12"
            >
                Technical <span className="text-gradient">Stack</span>
            </motion.h2>

            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                {skills.map((skill, idx) => (
                    <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 243, 255, 0.1)' }}
                        className="px-6 py-3 rounded-2xl glass-card text-lg font-medium text-gray-300 border border-white/5 cursor-default transition-all duration-300"
                    >
                        {skill}
                    </motion.span>
                ))}
            </div>
        </section>
    );
};
