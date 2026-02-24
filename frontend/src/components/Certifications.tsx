import React from 'react';
import { motion } from 'framer-motion';

export const Certifications: React.FC<{ certifications: string[] }> = ({ certifications }) => {
    return (
        <section id="certifications" className="scroll-mt-24 text-right">
            <motion.h2
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold font-heading mb-12"
            >
                Professional <span className="text-gradient">Certifications</span>
            </motion.h2>

            <div className="flex flex-col items-end gap-6">
                {certifications.map((cert, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="glass-card p-6 md:w-2/3 flex items-center gap-4 justify-end"
                    >
                        <p className="text-gray-300 text-lg font-medium">{cert}</p>
                        <div className="text-electric-purple text-2xl">✓</div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
