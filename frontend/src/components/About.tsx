import React from 'react';
import { motion } from 'framer-motion';
import { Education } from '../services/PortfolioService';

export const About: React.FC<{ content: string, education: Education }> = ({ content, education }) => {
    return (
        <section id="about" className="scroll-mt-24">
            <div className="flex flex-col lg:flex-row gap-16">
                <div className="lg:w-2/3">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold font-heading mb-12"
                    >
                        About <span className="text-gradient">Me</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 md:p-12 glow-shadow"
                    >
                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light mb-12">
                            {content}
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                            {[
                                { label: 'Location', value: 'Delhi, India' },
                                { label: 'Internship', value: 'Innoworq Infotech' },
                                { label: 'Interest', value: 'Scalable Systems' },
                            ].map((item, idx) => (
                                <div key={idx} className="space-y-1">
                                    <p className="text-gray-500 text-xs uppercase tracking-widest">{item.label}</p>
                                    <p className="text-white font-medium">{item.value}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <div className="lg:w-1/3">
                    <motion.h2
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold font-heading mb-12"
                    >
                        <span className="text-gradient">Education</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 border-t-4 border-t-electric-purple"
                    >
                        <p className="text-electric-purple font-mono text-sm mb-2">{education.duration}</p>
                        <h3 className="text-xl font-bold text-white mb-2">{education.school}</h3>
                        <p className="text-gray-400 mb-4">{education.degree}</p>
                        <div className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-neon-cyan text-sm">
                            {education.grade}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
