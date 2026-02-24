import React from 'react';
import { motion } from 'framer-motion';

export const Achievements: React.FC<{ achievements: string[] }> = ({ achievements }) => {
    return (
        <section id="achievements" className="scroll-mt-24">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold font-heading mb-12"
            >
                Key <span className="text-gradient">Achievements</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievements.map((achievement, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="glass-card p-6 flex items-start gap-4"
                    >
                        <div className="text-neon-cyan text-2xl">★</div>
                        <p className="text-gray-300 text-lg">{achievement}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
