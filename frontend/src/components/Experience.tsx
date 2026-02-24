import React from 'react';
import { motion } from 'framer-motion';
import { Experience as ExperienceType } from '../services/PortfolioService';

export const Experience: React.FC<{ experience: ExperienceType[] }> = ({ experience }) => {
    return (
        <section id="experience" className="scroll-mt-24">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold font-heading mb-12 text-right"
            >
                Work <span className="text-gradient">Experience</span>
            </motion.h2>

            <div className="space-y-8">
                {experience.map((exp, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass-card p-8 md:p-10 border-l-4 border-l-neon-cyan relative"
                    >
                        <div className="flex flex-col md:flex-row justify-between mb-4 gap-2">
                            <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                            <span className="text-neon-cyan font-mono">{exp.date}</span>
                        </div>
                        <p className="text-electric-purple font-medium text-xl mb-6">{exp.company}</p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            {exp.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
